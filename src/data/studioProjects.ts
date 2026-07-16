import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { type StudioProject } from "@/data/x3Content";
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
const publishedProjectSlugs = [
  "forest-hill-residence",
  "imperial-garden-residence",
  "yangming-residence",
] as const;
const projectTextDataBySlug: Record<string, ProjectTextData> = {
  "forest-hill-residence": {
    titleZh: "美麗山林",
    year: "2023",
  },
  "imperial-garden-residence": {
    titleZh: "立信帝國花園",
    year: "2024",
  },
  "yangming-residence": {
    titleZh: "陽明大廈",
    year: "2024",
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

function createProvisionalProject(
  slug: string,
  imageSet: ProjectImageSet,
  textData: ProjectTextData = {},
): StudioProject {
  const fallbackTitle = titleFromSlug(slug);
  const title = textData.titleZh ?? textData.titleEn ?? fallbackTitle;

  return {
    slug,
    title,
    subtitle: textData.subtitle ?? "住宅空間作品",
    category: textData.category ?? "Residential",
    location: textData.location ?? "--",
    year: textData.year ?? "--",
    coverImage: imageSet.coverImage,
    galleryImages: imageSet.galleryImages,
    description:
      textData.description ??
      "完整專案資訊尚在整理中，現階段先呈現空間影像與設計細節。",
    tags: textData.tags ?? ["Residential", "Project Archive"],
    area: textData.area ?? "--",
    scope: textData.scope ?? ["住宅空間設計", "詳細資料整理中"],
    overview: textData.overview ?? [
      "本案目前先公開空間影像，完整的設計背景、格局需求與材質說明仍在整理中。",
      "待資料確認後，將補充專案地點、完成年份、坪數與主要設計內容。",
    ],
    details: textData.details ?? [
      { label: "Type", value: "住宅空間" },
      {
        label: "Location",
        value: textData.location ?? "--",
      },
      { label: "Year", value: textData.year ?? "--" },
      { label: "Area", value: textData.area ?? "--" },
    ],
  };
}

export function getStudioProjects(): StudioProject[] {
  const imageSets = new Map(
    getProjectFolderSlugs().map((slug) => [slug, getProjectImageSet(slug)]),
  );

  return publishedProjectSlugs.flatMap((slug) => {
    const imageSet = imageSets.get(slug);

    if (!imageSet) {
      return [];
    }

    return [
      createProvisionalProject(
        slug,
        imageSet,
        projectTextDataBySlug[slug],
      ),
    ];
  });
}

export const studioProjects = getStudioProjects();

export function getStudioProject(
  slug: string,
  projects: StudioProject[] = getStudioProjects(),
) {
  return projects.find((project) => project.slug === slug);
}
