---
theme: default
title: Advent of Code
author: Vincent Hiribarren
info: |
  An introduction to Advent of Code, for developers who have never tried it (yet).
  Vincent Hiribarren · November 2026
colorSchema: dark
transition: slide-left
duration: 30min
fonts:
  sans: Source Code Pro
  mono: Source Code Pro
layout: cover
class: text-center aoc-cover
---

<pre class="tree">
<span class="star">*</span>
<span class="g">&gt;</span><span class="o">o</span><span class="g">&lt;</span>
<span class="g">&gt;&gt;</span><span class="r">@</span><span class="g">&lt;&lt;</span>
<span class="g">&gt;</span><span class="b">O</span><span class="g">&gt;&gt;</span><span class="o">o</span><span class="g">&lt;&lt;</span>
<span class="g">&gt;&gt;</span><span class="star">*</span><span class="g">&lt;&lt;&lt;</span><span class="r">@</span><span class="g">&lt;&lt;</span>
<span class="g">&gt;</span><span class="o">o</span><span class="g">&gt;&gt;&gt;</span><span class="b">O</span><span class="g">&lt;&lt;&lt;</span><span class="star">*</span><span class="g">&lt;</span>
<span class="t">|_|</span>
</pre>

# Advent of Code

<div class="subtitle">Save Christmas, one puzzle at a time</div>

<div class="cover-meta">Vincent Hiribarren · November 2026</div>

<style>
.aoc-cover { display: flex; flex-direction: column; justify-content: center; }
.aoc-cover .tree { background: none; border: none; line-height: 1.15; font-size: 1.3rem; margin: 0 auto 1rem; text-align: center; }
.aoc-cover .g { color: #009900; }
.aoc-cover .o { color: #ff9900; text-shadow: 0 0 5px #ff9900; }
.aoc-cover .r { color: #ff0000; text-shadow: 0 0 5px #ff0000; }
.aoc-cover .b { color: #0066ff; text-shadow: 0 0 5px #0066ff; }
.aoc-cover .t { color: #aaaaaa; }
.aoc-cover h1 { font-size: 3rem !important; }
.aoc-cover .subtitle { color: var(--aoc-dim); margin-top: 0.5rem; }
.aoc-cover .cover-meta { margin-top: 2.5rem; font-size: 0.9rem; color: var(--aoc-dim); }
</style>

---

# Agenda

<div class="agenda">

<div><span class="day">Day 1</span> What is Advent of Code? <span class="star">**</span></div>
<div><span class="day">Day 2</span> Languages & toolbox: algorithms, math, solvers <span class="star">**</span></div>
<div><span class="day">Day 3</span> Community & etiquette <span class="star">**</span></div>
<div><span class="day">Day 4</span> Your turn <span class="star">**</span></div>

</div>

<style>
.agenda { font-size: 1.3rem; line-height: 2.4; margin-top: 1.5rem; }
.agenda .day { display: inline-block; width: 6rem; color: var(--aoc-dim); }
</style>

---
layout: section
day: 1
---

# What is Advent of Code?

---

# An advent calendar of puzzles

- Created by **Eric Wastl** in *2015*, every December since
- One programming puzzle per day, unlocked at midnight US Eastern = *06:00 CET*
- Each puzzle is wrapped in a story: the elves are in trouble, and only you can save Christmas
- Hundreds of thousands of participants every year: students, professionals, competitive programmers, people learning a language
- *260+* past puzzles available, all still playable

<div class="box mt-6">

**Since 2025**: *12 puzzles* instead of 25, and **no global leaderboard** anymore.

</div>

---

# Why take part?

<div class="grid grid-cols-3 gap-6 mt-8 why">

<div class="box">

### A shared moment

Hundreds of thousands of people solve **the same puzzle on the same day**. Colleagues, Reddit, everyone talks about it.

</div>

<div class="box">

### A rhythm

One puzzle a day, for 12 days: a **short, visible commitment**. "Someday" never comes; December 1st does.

</div>

<div class="box">

### Back to basics

A break to **code by hand** again: write a BFS yourself, think about algorithms, away from frameworks and AI.

</div>

</div>

<div class="text-center mt-10 dim">

You could do this any time of the year. *Advent of Code is when everyone does it together.*

</div>

<style>
.why h3 { margin-top: 0; margin-bottom: 0.8rem; }
.why p { font-size: 0.95rem; line-height: 1.6; }
</style>

---

# How a day works

<div class="grid grid-cols-2 gap-8">
<div>

1. Read the story and the puzzle statement
2. Look at the small **example** and its expected answer
3. Download **your own input**: every participant gets a different one
4. Submit the answer (just a number or a string) <span class="star">*</span>
5. Part 2 unlocks: same input, a twist on the problem <span class="star">*</span>

<div class="box mt-8 text-center text-lg">

Let's look: [adventofcode.com](https://adventofcode.com/2016)

</div>

</div>
<div>

```text
--- Day 1: Historian Hysteria ---

[...] What is the total distance
between your lists?

Your puzzle answer was 1834060.

--- Part Two ---

[...] What is their similarity score?

Your puzzle answer was 21607792.

Both parts of this puzzle are complete!
They provide two gold stars: **
```

</div>
</div>

---

# What to expect

<div class="grid grid-cols-2 gap-8">
<div>

### Difficulty curve

- First days: a warm-up, 10–20 minutes
- Then it ramps up, but not steadily: an easy day can follow a hard one
- **Difficulty is personal**: one person's 10 minutes is another's evening, depending on what you already know
- **Part 2** often turns a naive solution into one that runs until next Christmas

</div>
<div>

### Recurring themes

- Parsing weird text formats
- 2D grids, mazes, cellular automata
- Shortest paths, graphs
- Simulations to run "a billion times"
- Small virtual machines to interpret
- A hidden picture in the output 🎄

</div>
</div>

---

# The right mindset

- **You don't have to finish.** Skipping a day is fine
- **You don't have to be fast.** Puzzles stay open forever; do them on the weekend, in January, whenever
- **It's throwaway code**: one input, one answer, hard to unit-test beyond the example. Don't aim for production quality
- **Aim to learn instead**: a new language, new algorithms, coding without an AI assistant
- **Getting stuck is part of it**: you will learn the most on the day you need a hint. Looking at the solution is learning

---
layout: section
day: 2
---

# Languages & toolbox

<div class="reassure">

You don't need any of this on day 1.<br>
You'll meet these ideas one puzzle at a time, and that's where the learning is.

</div>

<style>
.reassure { margin-top: 2rem; font-size: 1.1rem; line-height: 1.8; }
</style>

---

# Any language works, but...

<div class="box text-center text-lg">

*Python*: the favourite of the fastest solvers. **Batteries included**: big integers, regex, complex numbers, `heapq`, `itertools`, `functools`, `collections`, `@cache`

</div>

<div class="langs mt-3">
<div class="head"><span></span><span class="pro">+</span><span class="con">−</span></div>
<div><strong>C++</strong><span>fast, brute force often works</span><span>no big integers, no simple string split</span></div>
<div><strong>Go</strong><span>fast, struct keys in maps</span><span>boilerplate: <code>if err != nil</code>, no map/filter</span></div>
<div><strong>Rust</strong><span>fast, pattern matching</span><span>borrow checker vs graphs, regex crate</span></div>
<div><strong>Java · C#</strong><span>rich collections, big integers</span><span>verbose</span></div>
<div><strong>JS · TS</strong><span>quick to start</span><span>thin stdlib, no tuple keys</span></div>
<div><strong>Haskell</strong><span>elegant parsing and recursion</span><span>mutable grids</span></div>
<div><strong>Excel · Bash · SQL · APL</strong><span>because we can</span><span>everything else</span></div>
</div>

<style>
.langs { font-size: 0.8em; }
.langs > div { display: grid; grid-template-columns: 14.5rem 0.9fr 1.2fr; gap: 1rem; padding: 0.3rem 0; border-bottom: 1px solid var(--aoc-border); }
.langs > div > span:nth-child(2) { color: #7fdf7f; }
.langs > div > span:nth-child(3) { color: #ff8080; }
.langs .head { border-bottom-color: var(--aoc-dim); font-size: 1.2em; padding: 0; }
.langs .head .pro { color: var(--aoc-green); text-shadow: 0 0 5px var(--aoc-green); }
.langs .head .con { color: var(--aoc-red); text-shadow: 0 0 5px var(--aoc-red); }
</style>

---

# A typical Python toolkit

```python
from collections import Counter, defaultdict, deque
from functools import cache
from itertools import combinations, pairwise, product
import heapq, math, re

def ints(s: str) -> list[int]:
    return list(map(int, re.findall(r"-?\d+", s)))

# A 2D grid as a dict of complex numbers: 1j is "down", neighbours are p + d
grid = {complex(x, y): c for y, line in enumerate(open("input.txt").read().splitlines())
                         for x, c in enumerate(line)}
DIRS = (1, -1, 1j, -1j)
```

<div class="mt-4">

Turning `+`/`*` on complex numbers into moves and rotations (`d * 1j` = turn right) saves a lot of `if` statements.

</div>

---

# Algorithms you will meet

<div class="grid grid-cols-2 gap-6">
<div>

- **BFS / DFS**: mazes, reachability, flood fill
- **Dijkstra / A\***: weighted shortest paths
- **Memoization / dynamic programming**: "count all the ways"
- **Cycle detection**: "after 1 000 000 000 steps…"
- **Interval merging / splitting**: ranges too big to enumerate
- **Topological sort**, **union-find**, connected components

</div>
<div>

```python
def dijkstra(start, is_goal, neighbours):
    queue, seen = [(0, start)], set()
    while queue:
        cost, node = heapq.heappop(queue)
        if is_goal(node):
            return cost
        if node in seen:
            continue
        seen.add(node)
        for nxt, w in neighbours(node):
            heapq.heappush(queue, (cost + w, nxt))
```

<div class="dim text-sm mt-2">Write it once in December, reuse it five times.</div>

</div>
</div>

---

# Math & logic you will meet

<div class="math-slide">

<div class="grid grid-cols-2 gap-8">
<div>

### Arithmetic

- **GCD / LCM**: aligning cycles
- **Chinese remainder theorem**: cycles with offsets
- **Modular arithmetic**: huge powers, shuffles

### Algebra

- **Quadratic equations**: count without enumerating
- **Linear systems**: 2×2, Cramer's rule
- **Line intersections**: crossing trajectories

</div>
<div>

### Geometry

- **Shoelace + Pick's theorem**: polygon area, inner points
- Manhattan distance, grid rotations and flips

### Logic

- Constraints, boolean circuits
- Small VMs to reverse-engineer

</div>
</div>

</div>

<style>
.math-slide { font-size: 0.9em; }
.math-slide h3 { margin-top: 0.6rem; }
</style>

---

# When math gets hard: call a solver

[Z3](https://github.com/Z3Prover/z3) is an SMT solver: describe the constraints, let it find a solution.

```python
from z3 import Int, Solver

x, y, z, vx, vy, vz = (Int(n) for n in "x y z vx vy vz".split())
s = Solver()
for i, (px, py, pz, dx, dy, dz) in enumerate(hailstones[:3]):
    t = Int(f"t{i}")
    s.add(t >= 0,
          x + vx * t == px + dx * t,
          y + vy * t == py + dy * t,
          z + vz * t == pz + dz * t)
s.check()
print(s.model().eval(x + y + z))
```

<div class="dim text-sm mt-2">2023 day 24: throw a rock that hits every hailstone. A few lines with Z3, a page of linear algebra without.</div>

---

# Other useful tools

<div class="grid grid-cols-2 gap-8">
<div>

### Libraries

- **networkx**: graphs, shortest paths, min cut, cliques
- **sympy**: symbolic equations
- **numpy**: grids, matrices, convolutions
- **z3 / PuLP / OR-Tools**: constraints and optimization

</div>
<div>

### Look at things

- **Graphviz**: draw the input graph, the structure jumps out
- Print the grid at each step
- A spreadsheet to spot patterns in numbers

</div>
</div>

---

# Classic traps

- **Part 2 scales up**: the brute force that took 1 s now takes 3 000 years
- **Integer overflow**: answers often exceed 32 bits (and 2⁵³ in JavaScript)
- **Off-by-one**: "after 10 steps" vs "at step 10"
- **Trailing newline** or Windows line endings in the input
- **The example works, the input does not**: the input contains a case the example does not show
- **Parsing** often takes half the time: read the format carefully
- **Misreading the statement**: sometimes you solve part 2 before part 1 by accident!

<div class="box mt-6">

Always run on the **example first**, and turn its expected answer into an `assert`.

</div>

---

# Look at your input!

- The general problem is sometimes **intractable**…
- …but **your input** has a special structure that makes it solvable
- Cycles that align perfectly, a graph made of independent loops, a VM program that computes something simple
- Reverse-engineering the input is **part of the game**, not cheating

<div class="box mt-6">

2021 day 24: a 252-instruction program to brute-force over 9¹⁴ inputs? No: 14 blocks, each one a push or pop on a base-26 stack.
<br>
2024 day 24: a broken 45-bit adder to fix: draw it with Graphviz, the swapped wires stand out.

</div>

---
layout: section
day: 3
---

# Community & etiquette

---

# r/adventofcode

<div class="grid grid-cols-2 gap-8">
<div>

- **Solution Megathread** every day: hundreds of solutions in every language
- **Help/Question** posts: stuck? Someone hit the same wall
- **Visualization**: beautiful animations of the puzzles
- **Upping the Ante**: harder variants, crazy constraints
- **Funny**: memes and jokes about the puzzles

</div>
<div>

### Use it well

- Try alone first, then read others' solutions: it's where you **learn the most**
- Titles are spoiler-free by rule, but comments are not: be careful before solving

<div class="box mt-8 text-center text-lg">

Let's look: [r/adventofcode](https://www.reddit.com/r/adventofcode/)

</div>

</div>
</div>

---

# Don't publish the puzzles or inputs

<div class="grid grid-cols-2 gap-8">
<div>

- Puzzle texts **and inputs** are copyrighted by Eric Wastl
- The FAQ explicitly asks **not to redistribute** them
- Publishing your **solutions** is fine and encouraged
- Inputs in a public repo let people rebuild the whole site

</div>
<div>

```bash
# .gitignore
# Advent of Code inputs are copyrighted
input*.txt
inputs/
puzzles/
```

</div>
</div>

---

# LLMs and Advent of Code

<div class="grid grid-cols-2 gap-8">
<div>

### During the event

- The FAQ asks **not to use AI** to solve the puzzles for you
- Letting it solve the puzzle defeats the point: you learn by struggling
- Use it as a **rubber duck** or to explain a concept… after trying

</div>
<div>

### On past puzzles <span class="warn">⚠</span>

- All past puzzles **and** thousands of solutions are in the training data
- LLMs recognize a puzzle from a vague description, or just from your variable names
- **Autocompletion spoils**: type `def count_arrangements(springs` and get the full solution
- → Disable your AI assistant in your AoC folder

</div>
</div>

<div class="mt-4">

```jsonc
// .vscode/settings.json
{ "github.copilot.enable": { "*": false } }
```

</div>

---
layout: section
day: 4
---

# Your turn

---

# A learning loop

<div class="grid grid-cols-4 gap-4 mt-8 loop">

<div class="box">
<div class="step">1</div>

### Solve

Your way, however ugly. Get the&nbsp;star&nbsp;<span class="star">*</span>

</div>

<div class="box">
<div class="step">2</div>

### Clean up

Rename, extract, make it readable

</div>

<div class="box">
<div class="step">3</div>

### Ask an LLM

"Can this be simpler?" You may discover a new technique

</div>

<div class="box">
<div class="step">4</div>

### Read others

The Reddit megathread: other languages, other ideas

</div>

</div>

<div class="text-center mt-10">

Some people solve it in **a few lines** and **milliseconds**.<br>
<span class="dim">Nice to learn from, but optimization is secondary, unless it's the goal you set yourself.</span>

</div>

<style>
.loop .box { position: relative; padding-top: 1.6rem; }
.loop .step { position: absolute; top: -0.9rem; left: 1rem; background: var(--aoc-bg); padding: 0 0.4rem; color: var(--aoc-star); text-shadow: 0 0 5px var(--aoc-star); font-size: 1.2rem; }
.loop h3 { margin-top: 0; margin-bottom: 0.6rem; }
.loop p { font-size: 0.9rem; line-height: 1.5; }
</style>

---

# My starting template

<div class="grid grid-cols-[3fr_2fr] gap-6">
<div>

```python
#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.13"
# dependencies = [
#     # "z3-solver==4.15.4", # Example
# ]
# ///

from pathlib import Path

INPUT_FILEPATH = (p := Path(__file__)).parent/".."/"inputs"/f"{p.stem}.txt"


def part_1(input_data: str):
    result = None
    print("Part 1:", result)

def part_2(input_data: str):
    result = None
    print("Part 2:", result)

if __name__ == "__main__":
    file_data = INPUT_FILEPATH.read_text()
    part_1(file_data)
    part_2(file_data)
```

</div>
<div>

```text
aoc-2026/
├── src/
│   ├── day01.py
│   └── day02.py
└── inputs/       ← .gitignore
    ├── day01.txt
    └── day02.txt
```

<div class="mt-4">

- Copy `src/dayNN.py`, drop the input in `inputs/`, go
- The input file name follows the script name
- **Inputs stay out of the repository**

</div>

</div>
</div>

<style>
.slidev-layout { --slidev-code-font-size: 0.62rem; --slidev-code-line-height: 1.35; }
.slidev-layout li { font-size: 0.85rem; }
</style>

---

# Beyond Advent of Code

<div class="alts">
<div class="head"><span></span><span class="pro">+</span><span class="con">−</span></div>
<div class="group">Community, non-profit</div>
<div><strong><a href="https://everybody.codes">Everybody Codes</a></strong><span>AoC-like, in November: a warm-up</span><span>smaller community</span></div>
<div><strong><a href="https://i18n-puzzles.com">i18n puzzles</a></strong><span>Unicode, time zones, encodings</span><span>short, niche topic</span></div>
<div><strong><a href="https://projecteuler.net">Project Euler</a></strong><span>900+ problems, no deadline</span><span>more math than code</span></div>
<div><strong><a href="https://exercism.org">Exercism</a></strong><span>learn a language, human mentors</span><span>exercises, not puzzles</span></div>
<div><strong><a href="https://codeforces.com">Codeforces</a></strong><span>real competitive programming</span><span>strict time and memory limits</span></div>
<div class="group">Commercial platforms</div>
<div><strong><a href="https://www.codewars.com">Codewars</a></strong><span>bite-sized katas, any language</span><span>small problems, no story</span></div>
<div><strong><a href="https://leetcode.com">LeetCode</a></strong><span>interview prep, instant tests</span><span>grind-oriented, no input to explore</span></div>
<div><strong><a href="https://www.codingame.com">CodinGame</a></strong><span>bot battles, visual feedback</span><span>gamified, less algorithmic depth</span></div>
</div>

<style>
.alts { font-size: 0.8em; margin-top: 1rem; }
.alts > div { display: grid; grid-template-columns: 14.5rem 1fr 1fr; gap: 1rem; padding: 0.3rem 0; border-bottom: 1px solid var(--aoc-border); }
.alts > div > span:nth-child(2) { color: #7fdf7f; }
.alts > div > span:nth-child(3) { color: #ff8080; }
.alts strong a { color: var(--aoc-text); }
.alts .head { border-bottom-color: var(--aoc-dim); font-size: 1.2em; padding: 0; }
.alts .group { display: block; color: var(--aoc-star); text-shadow: 0 0 5px var(--aoc-star); padding-top: 0.8rem; border-bottom-color: var(--aoc-dim); }
.alts .head .pro { color: var(--aoc-green); text-shadow: 0 0 5px var(--aoc-green); }
.alts .head .con { color: var(--aoc-red); text-shadow: 0 0 5px var(--aoc-red); }
</style>

---

# Join us

<div class="mt-10">

<Leaderboards />

</div>

---
layout: center
class: text-center
---

# Thank you!

<div class="text-6xl star my-8">*</div>

Questions?

<div class="dim text-sm mt-8">Vincent Hiribarren · November 2026</div>
