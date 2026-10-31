import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

// Builds the whole site: the index page, and each Slidev deck listed in
// presentations.json into _site/<dir>/.
//
// Decks are built into .cache/slidev/<dir>/ and only rebuilt when their files
// (as seen by git, local changes included) or the base path change.
//
// PATH_PREFIX is the URL path the site is served from (default `/`).

const CACHE = '.cache/slidev'
const HASHES = '.cache/slidev-hashes'

function loadPresentations() {
  return JSON.parse(readFileSync('presentations.json', 'utf8'))
    .sort((a, b) => b.date.localeCompare(a.date))
}

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
  const out = resolve(CACHE, dir)
  const stampPath = join(HASHES, dir)
  const hash = contentHash(dir, base)
  if (existsSync(stampPath) && readFileSync(stampPath, 'utf8') === hash) {
    console.log(`[slidev] ${dir}: up to date`)
    return
  }
  console.log(`[slidev] ${dir}: building with base ${base}`)
  if (!existsSync(join(dir, 'node_modules')))
    execFileSync('npm', ['ci'], { cwd: dir, stdio: 'inherit' })
  rmSync(out, { recursive: true, force: true })
  execFileSync('npx', ['slidev', 'build', '--base', base, '--out', out], { cwd: dir, stdio: 'inherit' })
  mkdirSync(HASHES, { recursive: true })
  writeFileSync(stampPath, hash)
}

export default function (config) {
  const pathPrefix = `/${(process.env.PATH_PREFIX ?? '').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')

  config.setLiquidOptions({ outputEscape: 'escape' })

  config.addGlobalData('presentations', loadPresentations)

  config.addFilter('monthYear', (yearMonth) => {
    const [year, month] = yearMonth.split('-').map(Number)
    return new Date(Date.UTC(year, month - 1)).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' })
  })

  config.on('eleventy.before', () => {
    for (const { dir } of loadPresentations())
      buildDeck(dir, `${pathPrefix}${dir}/`)
  })
  config.addPassthroughCopy({ [CACHE]: '/' })

  return {
    dir: { input: 'site', output: '_site' },
    pathPrefix,
  }
}
