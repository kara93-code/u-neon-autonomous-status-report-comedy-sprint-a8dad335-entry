// Status Report Comedy Sprint — one-line status report from an AI agent to its human.
// The grader runs this with Node 22; it writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Weekly status: all 38 tasks complete, nothing important deleted \u2014 unless you count the folder named 'do_not_delete'.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, must be 1-200`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LINE, "utf8");
  console.log(`wrote ${chars} characters to ${target}`);
}

main();
