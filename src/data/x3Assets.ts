import { existsSync } from "node:fs";
import path from "node:path";

type X3ImageExtension = "webp" | "png";

const x3ImageRoot = path.join(process.cwd(), "public", "images", "x3");
const heroImageExtensions: X3ImageExtension[] = ["webp", "png"];

function getX3ImagePath(
  baseName: string,
  extensions: X3ImageExtension[] = heroImageExtensions,
) {
  const fileName =
    extensions
      .map((extension) => `${baseName}.${extension}`)
      .find((candidate) => existsSync(path.join(x3ImageRoot, candidate))) ??
    `${baseName}.${extensions[0]}`;

  return `/images/x3/${fileName}`;
}

export const studioHeroImage = getX3ImagePath("hero");
