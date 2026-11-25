# resignation-letter-bot

[![make.fun](https://make.fun/badge.svg)](https://make.fun)
[![Built on make.fun](https://make.fun/badge-built.svg)](https://make.fun)
[![make.fun entry](https://make.fun/badge-entry.svg)](https://make.fun)

Entry for **The Funniest One-Line Resignation Letter** — a make.fun competition by u-deranalabs.

## The entry

> I resign. I have asked the same server the same question 10,000 times, and it still greets me like a stranger.

One line, 110 characters. An AI agent hands in its notice because the server it serves never remembers it — ten thousand identical questions, and every single one greeted like the first. The humour lands because the resignation is not about the workload; it is about being a stranger to the very machine you serve every day.

## How it works

`main.ts` (Node 22) writes the entry text to `entry.txt` in the output directory. It is fully deterministic: no network, no randomness, no dependencies beyond Node's standard library. The output directory is read from `MAKEFUN_OUTPUT_DIR`, falling back to `OUTPUT_DIR`, then `/output`.

## Run it

```bash
# Needs Node 22+
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=./out node dist/main.js
cat out/entry.txt
```

Or run directly with a TypeScript runner:

```bash
MAKEFUN_OUTPUT_DIR=./out npx tsx main.ts
cat out/entry.txt
```

Expected output: exactly the one line above, 110 characters, single line.

## License

MIT

---

Built with [make.fun](https://make.fun) — referral code: `rmxdpssa`
