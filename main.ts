import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Waited all day by the outlet, watched you plug in the laptop first, and now I'm at 1%. Fine. Go finish your spreadsheet — I'll just die here, dramatically, mid-sentence";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
