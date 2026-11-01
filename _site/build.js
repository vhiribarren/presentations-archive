import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { Liquid } from 'liquidjs'

// Builds the whole site into _build/: each Slidev deck listed in
// presentations.json into _build/<dir>/, and the index page from
// src/index.liquid.
//
// Decks are built into _cache/slidev/<dir>/ and only rebuilt when their files
// (as seen by git, local changes included) or the base path change.
//
// PATH_PREFIX is the URL path the site is served from (default `/`).

// Presentations live at the root of the repository, one level up.
const ROOT = '..'
const OUT = '_build'
const CACHE = '_cache/slidev'
const HASHES = '_cache/slidev-hashes'
const REPO_URL = 'https://github.com/vhiribarren/presentations-archive'

function contentHash(dir, base) {
  const hash = createHash('sha256').update(base)
  const files = execFileSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', dir], { encoding: 'utf8' })
    .split('\0')
    .filter(f => f && existsSync(f))
    .sort()
  for (const file of files)
    hash.update(`\0${file}\0`).update(readFileSync(file))
  return hash.digest('hex')
}

function buildDeck(dir, base) {
  const src = join(ROOT, dir)
  const out = resolve(CACHE, dir)
  const stampPath = join(HASHES, dir)
  const hash = contentHash(src, base)
  if (existsSync(stampPath) && readFileSync(stampPath, 'utf8') === hash) {
    console.log(`[slidev] ${dir}: up to date`)
    return
  }
  console.log(`[slidev] ${dir}: building with base ${base}`)
  if (!existsSync(join(src, 'node_modules')))
    execFileSync('npm', ['ci'], { cwd: src, stdio: 'inherit' })
  rmSync(out, { recursive: true, force: true })
  execFileSync('npx', ['slidev', 'build', '--base', base, '--out', out], { cwd: src, stdio: 'inherit' })
  mkdirSync(HASHES, { recursive: true })
  writeFileSync(stampPath, hash)
}

function monthYear(yearMonth) {
  const [year, month] = yearMonth.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1)).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

function renderIndex(presentations) {
  const liquid = new Liquid({ root: 'src', outputEscape: 'escape' })
  liquid.registerFilter('monthYear', monthYear)
  return liquid.renderFileSync('index.liquid', { presentations, repoUrl: REPO_URL })
}

const pathPrefix = `/${(process.env.PATH_PREFIX ?? '').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')
const presentations = JSON.parse(readFileSync('presentations.json', 'utf8'))
  .sort((a, b) => b.date.localeCompare(a.date))

for (const { dir } of presentations)
  buildDeck(dir, `${pathPrefix}${dir}/`)

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })
for (const { dir } of presentations)
  cpSync(join(CACHE, dir), join(OUT, dir), { recursive: true })
writeFileSync(join(OUT, 'index.html'), renderIndex(presentations))
console.log(`[site] ${OUT}/ ready`)
