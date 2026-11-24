import { mkdirSync, writeFileSync } from "node:fs";

// Chosen line: earned pride, quiet and concrete — an apprentice's weld
// passes inspection first try, and the foreman's nod plus the next job
// is the whole reward. No trope, no shouting, lands in one read.
const LINE =
  "The apprentice's weld passed inspection on the first try, and the foreman just nodded and handed him the next job.";

// Gate: /output/entry.txt must hold one line, 1-240 chars, not blank.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
