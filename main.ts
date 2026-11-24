// Worst AI Advice: The 48-Hour Tight Line Open
// Deterministic Node 22 (stdlib only) entry: writes one line of
// deliberately terrible AI advice to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt when the variable is unset, as the grader runs it).
// Gate: the file is exactly the line, 1-140 chars, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const advice =
  "Absolutely! If your laptop overheats, wrap it in a towel \u2014 it keeps the heat in, where it belongs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), advice, "utf8");
