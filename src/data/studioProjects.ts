import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import {
  curatedStudioProjects,
  type StudioProject,
} from "@/data/x3Content";
import { studioHeroImage } from "@/data/x3Assets";

type ProjectImageExtension = "png" | "webp";

type ProjectImageSet = {
  coverImage: string;
  galleryImages: string[];
};

type ProjectTextData = Partial<
  Pick<
    StudioProject,
    | "subtitle"
    | "category"
    | "location"
    | "year"
    | "description"
    | "tags"
    | "area"
    | "scope"
    | "overview"
    | "details"
  >
> & {
  titleEn?: string;
  titleZh?: string;
};

const projectImageExtensions: ProjectImageExtension[] = ["png", "webp"];
const projectsImageRoot = path.join(
  process.cwd(),
  "public",
  "images",
  "x3",
  "projects",
);
const fallbackProjectCover = studioHeroImage;
const hiddenProjectSlugs = new Set([
  "warm-apartment-renewal",
  "quiet-family-residence",
  "light-kitchen-house",
]);
const projectTextDataBySlug: Record<string, ProjectTextData> = {
  "imperial-garden-residence": {
    titleZh: "立信帝國花園",
  },
  "yangming-residence": {
    titleZh: "陽明大廈",
  },
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function projectImageUrl(slug: string, fileName: string) {
  return `/images/x3/projects/${slug}/${fileName}`;
}

function getProjectFolderSlugs() {
  if (!existsSync(projectsImageRoot)) {
    return [];
  }

  return readdirSync(projectsImageRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => !hiddenProjectSlugs.has(slug))
    .sort((first, second) => first.localeCompare(second));
}

function getProjectImageSet(slug: string): ProjectImageSet {
  const projectDirectory = path.join(projectsImageRoot, slug);

  if (!existsSync(projectDirectory)) {
    return {
      coverImage: fallbackProjectCover,
      galleryImages: [],
    };
  }

  const files = readdirSync(projectDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);
  const fileNameLookup = new Map(
    files.map((fileName) => [fileName.toLowerCase(), fileName]),
  );
  const heroFile = projectImageExtensions
    .map((extension) => `${slug}-hero.${extension}`)
    .map((fileName) => fileNameLookup.get(fileName))
    .find((fileName): fileName is string => Boolean(fileName));
  const numberedImagePattern = new RegExp(
    `^${escapeRegExp(slug)}-(\\d+)\\.(png|webp)$`,
    "i",
  );
  const numberedFiles = files
    .map((fileName) => {
      const match = fileName.match(numberedImagePattern);

      if (!match) {
        return null;
      }

      return {
        fileName,
        index: Number(match[1]),
      };
    })
    .filter((file): file is { fileName: string; index: number } =>
      Boolean(file),
    )
    .sort((first, second) => first.index - second.index);
  const coverFile = heroFile ?? numberedFiles[0]?.fileName;
  const galleryFiles = heroFile ? numberedFiles : numberedFiles.slice(1);

  return {
    coverImage: coverFile
      ? projectImageUrl(slug, coverFile)
      : fallbackProjectCover,
    galleryImages: galleryFiles.map((file) =>
      projectImageUrl(slug, file.fileName),
    ),
  };
}

function createPlaceholderProject(
  slug: string,
  imageSet: ProjectImageSet,
  textData: ProjectTextData = {},
): StudioProject {
  const fallbackTitle = titleFromSlug(slug);
  const title = textData.titleZh ?? textData.titleEn ?? fallbackTitle;

  return {
    slug,
    title,
    subtitle: textData.subtitle ?? "專案資訊整理中",
    category: textData.category ?? "Project",
    location: textData.location ?? "Taiwan",
    year: textData.year ?? "TBD",
    coverImage: imageSet.coverImage,
    galleryImages: imageSet.galleryImages,
    description: textData.description ?? `${title} 的專案資訊正在整理中。`,
    tags: textData.tags ?? ["Project", "In Progress"],
    area: textData.area ?? "暫定",
    scope: textData.scope ?? ["專案資訊整理中", "圖片與文字待補"],
    overview: textData.overview ?? [
      "此專案已依照圖片資料夾建立作品頁，詳細設計說明正在整理中。",
      "後續可補上設計概念、格局需求、材質規劃、施工範圍與完工資訊。",
    ],
    details: textData.details ?? [
      { label: "Type", value: "暫定" },
      { label: "Location", value: "暫定" },
      { label: "Year", value: "暫定" },
      { label: "Area", value: "暫定" },
    ],
  };
}

export function getStudioProjects(): StudioProject[] {
  const imageSets = new Map(
    getProjectFolderSlugs().map((slug) => [slug, getProjectImageSet(slug)]),
  );
  const curatedSlugs = new Set(
    curatedStudioProjects.map((project) => project.slug),
  );
  const curatedProjects = curatedStudioProjects
    .filter((project) => !hiddenProjectSlugs.has(project.slug))
    .map((project) => {
      const imageSet = imageSets.get(project.slug);

      if (!imageSet) {
        return project;
      }

      return {
        ...project,
        coverImage: imageSet.coverImage,
        galleryImages: imageSet.galleryImages,
      };
    });
  const generatedProjects = Array.from(imageSets.entries())
    .filter(([slug]) => !curatedSlugs.has(slug))
    .map(([slug, imageSet]) =>
      createPlaceholderProject(slug, imageSet, projectTextDataBySlug[slug]),
    );

  return [...curatedProjects, ...generatedProjects];
}

export const studioProjects = getStudioProjects();

export function getStudioProject(
  slug: string,
  projects: StudioProject[] = getStudioProjects(),
) {
  return projects.find((project) => project.slug === slug);
}
