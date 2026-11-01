# Website

Builds <https://www.alea.net/presentations-archive/>: an index page plus each Slidev deck built in its own sub-directory. Deployed by [a GitHub workflow](../.github/workflows/pages.yml) on each push to `main`, or manually from the *Actions* tab.

## Publishing a presentation

Add an entry to [presentations.json](./presentations.json); `dir` is a directory at the root of the repository containing a Slidev deck (`package.json` + `slides.md`), and `date` is `YYYY-MM`:

```json
{
  "dir": "2026-11-advent-of-code-intro",
  "title": "Advent of Code: an introduction",
  "description": "30-minute talk encouraging developers to take part in Advent of Code.",
  "date": "2026-11"
}
```

Directories not listed there are neither built nor published.

## Building locally

From this directory; the GitHub workflow runs exactly the same command:

```sh
npm install
npm run build   # whole site in _build/
npm run serve   # serves _build/ on http://localhost:3000
```

[build.js](./build.js) builds each deck listed in `presentations.json` (running `npm ci` in its directory if needed), then renders the index page from the [Liquid](https://liquidjs.com/) template [src/index.liquid](./src/index.liquid). Deck builds are cached in `_cache/`: a deck is only rebuilt when one of its files (local changes included) or the base path changes; delete `_cache/` to force a rebuild.

`PATH_PREFIX` sets the URL path the site is served from: `/` by default, `/presentations-archive/` in the workflow. Mind git-ignored `*.local.json` files: a local build bundles them, the published one does not (and changing them does not trigger a rebuild).

## GitHub configuration

In the repository *Settings → Pages*, the source must be **GitHub Actions**. The site is served under the custom domain of the `vhiribarren.github.io` user site.
