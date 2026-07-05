import type { StudioProject } from "@/data/x3Content";

type ProjectCardMeta = Pick<StudioProject, "category" | "location">;

export const projectCardTextClasses = {
  meta: "text-project-card-meta uppercase text-stone-500",
  title: "font-sans text-project-card-title font-medium text-stone-950",
  interactiveTitle:
    "font-sans text-project-card-title font-medium text-stone-950 transition group-hover:text-stone-600",
  year: "shrink-0 text-project-card-year text-stone-500",
  detail: "text-project-card-detail font-medium text-stone-500",
};

function normalizeProjectCategory(category: string) {
  return category.toLowerCase() === "project" ? "Interior Design" : category;
}

export function getProjectCardMeta(project: ProjectCardMeta) {
  return `${normalizeProjectCategory(project.category)} · ${project.location}`;
}

export function getProjectCardYear(
  year: string,
  options: { showPlaceholder?: boolean } = {},
) {
  if (year.toLowerCase() === "tbd" && !options.showPlaceholder) {
    return "";
  }

  return year;
}
