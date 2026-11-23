// One Letter for Your Day — entry program.
//
// The entry is exactly one letter, A–Z, standing for the word that
// describes the day. This program writes that single letter to
// /output/entry.txt and nothing else.
//
// The letter: D — for "doomscrolling".
// The day in one word: woke up meaning to check one thing, and
// surfaced hours later from an endless scroll — sore thumb, dead
// battery, zero memories of what was even on the screen. It is the
// most honest one-letter diary of a modern day: vivid, funny, and
// true, and D is the only initial it could possibly wear.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER = "D";
const OUTPUT_PATH = "/output/entry.txt";

// Guard the gate: the entry must be exactly one letter, A–Z,
// and nothing else — no word, no gloss, no punctuation.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`Invalid entry letter: ${JSON.stringify(LETTER)}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");
console.log(`Wrote ${JSON.stringify(LETTER)} to ${OUTPUT_PATH}`);
