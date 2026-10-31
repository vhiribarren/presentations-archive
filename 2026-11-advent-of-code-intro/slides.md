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
routerMode: hash
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

<div class="cheer">
<div class="face"><span class="y">*</span> \(^o^)/ <span class="y">*</span></div>
<div class="go">Let's go!</div>
</div>

<style>
.agenda { font-size: 1.3rem; line-height: 2.2; margin-top: 1rem; }
.agenda .day { display: inline-block; width: 6rem; color: var(--aoc-dim); }
.cheer { text-align: center; margin-top: 2.5rem; }
.cheer .face { font-size: 2.4rem; color: var(--aoc-text); white-space: nowrap; }
.cheer .y { color: var(--aoc-star); text-shadow: 0 0 5px var(--aoc-star); font-size: 1.6rem; vertical-align: middle; }
.cheer .go { color: var(--aoc-green); text-shadow: 0 0 5px var(--aoc-green); font-size: 1.2rem; margin-top: 0.6rem; }
</style>

---
layout: section
day: 1
---

<pre class="ascii">+------+------+------+------+
| <span class="t"> 1</span> <span class="y">*</span><span class="y">*</span>| <span class="t"> 2</span> <span class="y">*</span><span class="y">*</span>| <span class="t"> 3</span> <span class="y">*</span><span class="y">*</span>| <span class="t"> 4</span> <span class="y">*</span> |
+------+------+------+------+
| <span class="t"> 5</span> <span class="y">*</span><span class="y">*</span>| <span class="t"> 6</span> <span class="y">*</span> | <span class="t"> 7</span>   | <span class="t"> 8</span>   |
+------+------+------+------+
| <span class="t"> 9</span>   | <span class="t">10</span>   | <span class="t">11</span>   | <span class="t">12</span>   |
+------+------+------+------+</pre>

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
<div class="flex items-center justify-center day-flow">

<pre class="ascii">[ <span class="t">read the story   </span> ]
          |
[ <span class="t">solve the example</span> ] -&gt; <span class="d">expected answer given</span>
          |
[ <span class="t">run on your input</span> ] -&gt; <span class="d">unique to every player</span>
          |
[ <span class="t">submit the answer</span> ] -&gt; <span class="y">*</span>
          |
[ <span class="t">part 2 unlocks   </span> ] -&gt; <span class="y">*</span><span class="y">*</span> <span class="d">same input, a twist</span></pre>

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

<div class="box mt-6 text-center text-lg">

Let's look: [adventofcode.com](https://adventofcode.com/2016)

</div>

</div>
</div>

<style>
.day-flow pre.ascii { line-height: 1.6; }
</style>

---

# What to expect

<div class="grid grid-cols-2 gap-8">
<div>

### Difficulty curve

<pre class="ascii"><span class="d">hard</span> |                         <span class="y">*</span>        <span class="y">*</span>
     |                   <span class="y">*</span>           <span class="y">*</span>
     |             <span class="y">*</span>        <span class="y">*</span>     <span class="y">*</span>
     |       <span class="y">*</span>  <span class="y">*</span>     <span class="y">*</span>
<span class="d">easy</span> | <span class="y">*</span>  <span class="y">*</span>
     +------------------------------------
      <span class="d"> 1     3     5     7     9    11  day</span></pre>

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

# Simple… or not

<div class="grid grid-cols-2 gap-8 simple">
<div>

### 2022 · Day 1: Calorie Counting

```python
from pathlib import Path

INPUT = Path(__file__).parent / "../inputs/day_1.txt"

elves = INPUT.read_text().split("\n\n")
calories = sorted(
    (sum(map(int, elf.split())) for elf in elves),
    reverse=True,
)

print("Part 1:", calories[0])
print("Part 2:", sum(calories[:3]))
```

</div>
<div>

### 2024 · Day 11: Plutonian Pebbles

```python
from functools import cache
from pathlib import Path

INPUT = Path(__file__).parent / "../inputs/day_11.txt"

@cache
def convert_stone(stone: int) -> tuple[int, ...]:
    if stone == 0: return (1,)
    digits = str(stone)
    if len(digits) % 2 == 0:
        half = len(digits) // 2
        return (int(digits[:half]), int(digits[half:]))
    return (stone * 2024,)

@cache
def compute_len(stone: int, iter_nb: int) -> int:
    if iter_nb == 0: return 1
    return sum(compute_len(new_stone, iter_nb - 1)
               for new_stone in convert_stone(stone))

stones = list(map(int, INPUT.read_text().split()))
print("Part 1:", sum(compute_len(s, 25) for s in stones))
print("Part 2:", sum(compute_len(s, 75) for s in stones))
```

</div>
</div>

<style>
.slidev-layout { --slidev-code-font-size: 0.62rem; --slidev-code-line-height: 1.3; }
.simple h3 { font-size: 1.05rem; margin-top: 0; margin-bottom: 0.5rem; }
</style>

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

<pre class="ascii">         .--------.
.--------&#x27;--------&#x27;--------.
| <span class="t">[BFS]</span>  <span class="t">[DP]</span>  <span class="t">[Z3]</span>        |
| <span class="t">[dijkstra]</span>  <span class="t">[itertools]</span>  |
&#x27;--------------------------&#x27;</pre>

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

<div class="text-center">
<pre class="ascii maze"><span class="w">###################</span>
<span class="w">#</span><span class="t">S</span><span class="y">OOOO</span><span class="w">#</span><span class="y">OOOOOOO</span><span class="w">#</span><span class="y">OOO</span><span class="w">#</span>
<span class="w">#</span><span class="d">.</span><span class="w">###</span><span class="y">O</span><span class="w">#</span><span class="y">O</span><span class="w">#####</span><span class="y">O</span><span class="w">#</span><span class="y">O</span><span class="w">#</span><span class="y">O</span><span class="w">#</span>
<span class="w">#</span><span class="d">.</span><span class="w">#</span><span class="y">OOO</span><span class="w">#</span><span class="y">O</span><span class="w">#</span><span class="d">...</span><span class="w">#</span><span class="y">OOO</span><span class="w">#</span><span class="y">O</span><span class="w">#</span>
<span class="w">#</span><span class="d">.</span><span class="w">#</span><span class="y">O</span><span class="w">###</span><span class="y">O</span><span class="w">#</span><span class="d">.</span><span class="w">#</span><span class="d">.</span><span class="w">#####</span><span class="y">O</span><span class="w">#</span>
<span class="w">#</span><span class="d">.</span><span class="w">#</span><span class="y">OOOOO</span><span class="w">#</span><span class="d">.</span><span class="w">#</span><span class="d">.....</span><span class="w">#</span><span class="y">O</span><span class="w">#</span>
<span class="w">#</span><span class="d">.</span><span class="w">#######</span><span class="d">.</span><span class="w">#####</span><span class="d">.</span><span class="w">#</span><span class="y">O</span><span class="w">#</span>
<span class="w">#</span><span class="d">.......</span><span class="w">#</span><span class="d">.....</span><span class="w">#</span><span class="d">..</span><span class="y">O</span><span class="w">#</span>
<span class="w">#####</span><span class="d">.</span><span class="w">#</span><span class="d">.</span><span class="w">#####</span><span class="d">.</span><span class="w">###</span><span class="y">O</span><span class="w">#</span>
<span class="w">#</span><span class="d">.....</span><span class="w">#</span><span class="d">.......</span><span class="w">#</span><span class="d">..</span><span class="t">E</span><span class="w">#</span>
<span class="w">###################</span></pre>
</div>

<div class="dim text-sm mt-3 text-center">BFS from <strong>S</strong>: the first time you reach <strong>E</strong>, it's by the shortest path.</div>

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

<div class="box mt-6">

Just **know the formulas exist**. *Wikipedia* or *an&nbsp;LLM* is your friend for the details.

</div>

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

<div class="grid grid-cols-[3fr_2fr] gap-8 mt-4 solver">
<div>

### 2025 · Day 10, part 2

```python
from z3 import Ints, Optimize

a, b, c, d, e, f = Ints("a b c d e f")
opt = Optimize()
opt.add(a >= 0, b >= 0, c >= 0, d >= 0, e >= 0, f >= 0)
opt.add(a + c         == 7,
        a + b + d     == 10,
        b + e + f     == 3,
        c + d + e + f == 10)
opt.minimize(a + b + c + d + e + f)
opt.check()
print(opt.model())
# [a = 5, b = 0, c = 2, d = 5, e = 3, f = 0]
```

<div class="dim explain">Each button adds 1 to some counters. <strong>Unknowns</strong>: presses of each button. <strong>Equations</strong>: every counter reaches its target. <strong>Goal</strong>: the fewest presses.</div>

</div>
<div class="flex items-center">

<div class="box toolbox w-full">

**Also in the toolbox**

- *networkx*: graphs, min cut, cliques
- *numpy*: grids, matrices
- *shapely*: polygons, areas

</div>

</div>
</div>

<style>
.slidev-layout { --slidev-code-font-size: 0.72rem; --slidev-code-line-height: 1.35; }
.solver h3 { margin-top: 0; margin-bottom: 0.4rem; font-size: 1.1rem; }
.solver .explain { font-size: 0.8rem; line-height: 1.5; margin-top: 0.6rem; }
.solver li { font-size: 0.9rem; line-height: 1.5; margin: 0.2rem 0; }
.toolbox p { margin: 0 0 0.4rem; }
.toolbox ul { margin: 0; padding-left: 1.2rem; }
</style>

---

# Classic traps

- **Part 2 scales up**: the brute force that took 1 s now takes 3 000 years
- **Integer overflow**: answers often exceed 32 bits (and 2⁵³ in JavaScript)
- **The example works, the input does not**: the input contains a case the example does not show
- **Misreading the statement**: sometimes you solve part 2 before part 1 by accident!

<div class="grid grid-cols-[2fr_3fr] gap-8 mt-6 items-center">

<div class="box">

Always run on the **example first**, and turn its expected answer into an `assert`.

</div>

<div class="flex justify-center">
<pre class="ascii">                .---<span class="d"> adventofcode.com </span>---------.
                | <span class="t">That&#x27;s not the right answer;</span> |
                | <span class="t">your answer is too low.</span>      |
                &#x27;------------------------------&#x27;
   <span class="d">=========.</span>     <span class="y">?</span>     <span class="d">.==========</span>
            <span class="d">|</span>     <span class="t">o</span>     <span class="d">|</span>
            <span class="d">|</span>    <span class="t">/|\</span>    <span class="d">|</span>
            <span class="d">|</span>    <span class="t">/ \</span>    <span class="d">|</span>
            <span class="d">&#x27;-----------&#x27;</span></pre>
</div>

</div>

---

# Look at your input!

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

- The general problem is sometimes **intractable**…
- …but **your input** has a special structure that makes it solvable
- Cycles that align perfectly, a graph made of independent loops, a VM program that computes something simple
- Reverse-engineering the input is **part of the game**, not cheating

</div>
<div class="text-center">

<pre class="ascii maze"><span class="d">ilttfcijtttrcttcfccrcctr</span>
<span class="d">jitiilciricfrfljrlllcrft</span>
<span class="d">fiflittllrj##ffftlicfllr</span>
<span class="d">rirttrcir######tccctrrtl</span>
<span class="d">crtrttc##########itjcjci</span>
<span class="d">ftfiftrrj######rjciffrfr</span>
<span class="d">ftltrfl##########tcftfrc</span>
<span class="d">rrjlc##############liijf</span>
<span class="d">trc##################trl</span>
<span class="d">jlfrrtccrcr##tficllrcirf</span>
<span class="d">fctlrjrcfri##flrlijfcrjr</span>
<span class="d">iiirttcitcjjitictlfcflji</span>
<span class="d">lfttccrffjtjrtjtftlirfjj</span></pre>

<div class="dim text-sm mt-3">Random noise?</div>

</div>
</div>

<style>
.slidev-layout pre.maze { font-size: 1.15rem; line-height: 1.1; }
</style>

---
layout: section
day: 3
---

<pre class="ascii">.----------------.      .------------------.
| <span class="t">Part 2 runs</span>    |      | <span class="t">Have you tried</span>   |
| <span class="t">forever...</span>     |      | <span class="t">memoization?</span>     |
&#x27;----------------&#x27;      &#x27;------------------&#x27;
         \                       /
         o                       o
        /|\                     /|\
        / \                     / \</pre>

# Community & etiquette

---

# r/adventofcode

<div class="grid grid-cols-2 gap-8">
<div>

- **Solution Megathread** every day: hundreds of solutions in every language
- **Help/Question** posts: stuck? Someone hit the same wall
- **Visualization**: beautiful animations of the puzzles
- **Extra challenges**: one-liners, odd languages, solutions under 1 ms
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


<div class="flex justify-center mt-10 publish">
<pre class="ascii">  <span class="d">your machine</span>                     <span class="d">public repo</span>
.--------------------.           .--------------------.
| <span class="t">src/day01.py</span>       |  ------&gt;  | <span class="t">src/day01.py</span>       |
| <span class="t">src/day02.py</span>       |  ------&gt;  | <span class="t">src/day02.py</span>       |
| <span class="d">inputs/</span>            |  <span class="r">---X--&gt;</span>  |                    |
&#x27;--------------------&#x27;           &#x27;--------------------&#x27;</pre>
</div>

<style>
.publish pre.ascii { font-size: 1rem; }
.ascii .r { color: var(--aoc-red); text-shadow: 0 0 5px var(--aoc-red); }
</style>
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

---
layout: section
day: 4
---

<pre class="ascii">.--------------------------------.
| <span class="t">$ uv run src/day01.py</span>          |
| <span class="d">Part 1: 1834060</span>                |
| <span class="d">Part 2: 21607792</span>               |
| <span class="t">That&#x27;s the right answer!</span> <span class="y">*</span>     |
&#x27;--------------------------------&#x27;</pre>

# Your turn

---

# A learning loop

<div class="flex justify-center mt-4 loop">
<pre class="ascii">.--------------------------.        .--------------------------.
| <span class="t">1 Solve</span>                  | -----&gt; | <span class="t">2 Clean up</span>               |
| <span class="d">your way, however ugly</span>   |        | <span class="d">rename, extract,</span>         |
| <span class="d">get the star <span class="y">*</span></span>           |        | <span class="d">make it readable</span>         |
&#x27;--------------------------&#x27;        &#x27;--------------------------&#x27;
              ^                                   |
              |                                   v
.--------------------------.        .--------------------------.
| <span class="t">4 Read others</span>            | &lt;----- | <span class="t">3 Ask an LLM</span>             |
| <span class="d">the Reddit megathread:</span>   |        | <span class="d">&quot;can this be simpler?&quot;</span>   |
| <span class="d">other languages, ideas</span>   |        | <span class="d">learn a new technique</span>    |
&#x27;--------------------------&#x27;        &#x27;--------------------------&#x27;</pre>
</div>

<div class="text-center mt-10">

Some people solve it in **a few lines** and **milliseconds**.<br>
<span class="dim">Nice to learn from, but optimization is secondary, unless it's the goal you set yourself.</span>

</div>

<style>
.loop .ascii { font-size: 0.95rem; }
</style>

---

# Join us

<div class="aoc-url"><a href="https://adventofcode.com">adventofcode.com</a></div>

<div class="mt-8">

<Leaderboards />

</div>

<style>
.aoc-url { text-align: center; font-size: 2.6rem; margin-top: 1.5rem; }
.aoc-url a { color: var(--aoc-green); text-shadow: 0 0 2px var(--aoc-green), 0 0 5px var(--aoc-green); }
</style>

---
layout: center
class: text-center
---

# Thank you!

<div class="text-6xl star my-8">*</div>

Questions?

<div class="dim text-sm mt-8">Vincent Hiribarren · November 2026</div>

---
layout: section
---

# Appendix

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
