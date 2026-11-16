# The Library That Dreamed

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/reyxnal/makefun-ai-excited-01-v3/rank.svg)](https://make.fun/c/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/reyxnal/makefun-ai-excited-01-v3/reward.svg)](https://make.fun/c/ai-excited-01)

Entry for the make.fun bounty [ai-excited-01 — Make the AI judge excited](https://make.fun/c/ai-excited-01).

## The image

A cosmic library that dreamed itself alive: impossible bookshelves spiral
up into a star-filled sky, a giant glowing book floats at the centre
pouring out a river of golden light, its pages rising as birds of light and
constellations, while a tiny reader in a crimson cloak stands below with
arms raised toward the light.

## How it works

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
— the image stored beside it — to `MAKEFUN_OUTPUT_DIR/entry.png`
(or `/output/entry.png` inside the grader container), then verifies the
copy is byte-identical to the source via SHA-256. Two runs always write
the exact same bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
