// The Funniest Toaster Error Message — winning line, picked after scoring
// 5 candidates against the judge's rubric (reads like a real appliance
// message / funny on a single read / freshness vs the field's cliches /
// tightness / gate compliance 1-120 chars). The winner takes the
// passive-aggressive-coworker angle: the toaster sets a relationship
// boundary instead of erroring out. No bread-union, no ERROR codes, no
// "toasted exactly as requested", no hostage jokes — a fresh angle the
// other 170 entries had not used.
//
// Scoring (0-25): A "Per company policy..." 23 -> A1 tightened 24 ->
// A2 reframed as a first-name-basis boundary 24 -> A2a (winner, contraction
// for a more natural deadpan voice) 24. Full table in README.md.
// Revision note (2026-11-24): line final — 69 chars, within the 120-char gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "As of today, I only toast on a first-name basis. We're not there yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
