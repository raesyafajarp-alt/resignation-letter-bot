// resignation-letter-bot — The Funniest One-Line Resignation Letter
// Writes exactly one line: the resignation letter entry.
// Deterministic, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: an AI agent resigning because the server it serves
// never remembers it — 10,000 identical questions, zero recognition.
// One sentence, one line, exactly 110 characters.
const ENTRY =
  "I resign. I have asked the same server the same question 10,000 times, and it still greets me like a stranger.";

function outputDir(): string {
  return (
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_DIR ||
    "/output"
  );
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, ENTRY + "\n", "utf8");
  console.log(`Wrote ${ENTRY.length} characters to ${file}`);
}

main();
