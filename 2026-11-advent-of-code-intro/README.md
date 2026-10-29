# Advent of Code: an introduction

30-minute talk encouraging developers to take part in [Advent of Code](https://adventofcode.com/), built with [Slidev](https://sli.dev/).

- `npm install`
- `npm run dev`
- visit <http://localhost:3030>

Slides are in [slides.md](./slides.md).

## Private leaderboards

The "Join us" slide reads private leaderboards from `leaderboards.local.json` (git-ignored, never commit it: anyone with a code can join):

```json
[
  { "title": "My team", "code": "123456-abcdef12" }
]
```

Without this file, the slide explains how to create a leaderboard instead. The file is bundled at build time: build or export without it before publishing.

## License

Content under CC BY-NC 4.0, code under MIT; third-party logos and screenshots are not covered. See the [repository README](../README.md#license).
