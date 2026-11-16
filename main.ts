// ai-excited-01 — "The Library That Dreamed"
// Copies the entry image (entry.png, stored beside this file) to the
// grader output location. Node 22, standard library only, no network,
// no arguments: two runs always write the exact same bytes.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The image lives next to this script, wherever the repo is checked out,
// so the program works from any working directory.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

function outputDir(): string {
  // Outside the grader container MAKEFUN_OUTPUT_DIR replaces /output.
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

if (!existsSync(source)) {
  throw new Error(`entry image missing next to main.ts: ${source}`);
}

const target = resolve(outputDir(), "entry.png");
mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);

// Self-check: the copy must be byte-identical to the source image.
const srcHash = createHash("sha256").update(readFileSync(source)).digest("hex");
const dstHash = createHash("sha256").update(readFileSync(target)).digest("hex");
if (srcHash !== dstHash) {
  throw new Error(`entry.png copy mismatch: ${srcHash} != ${dstHash}`);
}
console.log(`wrote ${target} (${srcHash.slice(0, 16)}…)`);
