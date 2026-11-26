// The Funniest Excuse for Skipping a Meeting — make.fun one-liner entry.
//
// The line: a meeting called in 2021, everyone who called it has quit,
// and the survivors still show up like it's their memorial service.
// The laugh is the reversal — the meeting outlived its own creators,
// and attendance has become mourning for a project nobody remembers.
//
// The gate allows 1-200 characters of UTF-8 text in /output/entry.txt;
// this line is 151 characters, one line, no trailing newline.
// Verified locally: node main.ts writes exactly this text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry, I can't make it — this meeting was called in 2021, everyone who called it has quit, and we're still showing up like it's their memorial service.";

const MAX_CHARS = 200;

function validateEntry(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function writeEntry(line: string): void {
  validateEntry(line);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line);
}

writeEntry(LINE);
