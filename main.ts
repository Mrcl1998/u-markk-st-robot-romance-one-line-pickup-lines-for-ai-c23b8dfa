// Robot Romance: One-Line Pickup Lines for AI
// Writes exactly one pickup line (77 chars, no trailing newline) to
// /output/entry.txt. Pure Node stdlib, no dependencies, deterministic.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my AI for the perfect pickup line and it just showed me your picture.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
// The grader reads the output as another user: the file must be world-readable.
chmodSync(outFile, 0o644);
// NOTE: never chmod outDir itself — under the grader /output is a root-owned
// bind mount and chmod on it fails with EPERM.
