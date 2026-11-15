---
theme: seriph
title: 'A Tour of Rust: extras'
author: Vincent Hiribarren
transition: slide-left
themeConfig:
  primary: '#CE422B'
layout: cover
class: text-center
---

# A Tour of Rust: extras

Slides cut from the introduction, kept for a follow-up talk

---

# Traits and composition

No inheritance: shared behaviour through traits, with static or dynamic (runtime) dispatch

<div class="grid grid-cols-[3fr_2fr] gap-6 traits">
<div>

**Traits**

```rust
trait Animal {
    fn name(&self) -> String;
    fn speak(&self) -> String {          // default implementation
        format!("{} makes a sound", self.name())
    }
}

struct Dog;
impl Animal for Dog {
    fn name(&self) -> String { "Dog".into() }
}

fn greet(a: &impl Animal) { a.speak(); } // static: one copy per type
fn call(a: &dyn Animal) { a.speak(); }   // dynamic: vtable at runtime

let zoo: Vec<Box<dyn Animal>> = vec![Box::new(Dog), Box::new(Cat)];
```

</div>
<div>

**Composition**, and explicit delegation

```rust
struct Engine { power: u32 }
impl Engine {
    fn start(&self) { /* ... */ }
}

struct Car {
    engine: Engine,   // has an engine, is not one
}
impl Car {
    fn start(&self) {
        self.engine.start() // delegate explicitly
    }
}
```

</div>
</div>

<style>
.traits {
  --slidev-code-font-size: 11px;
  --slidev-code-line-height: 16px;
}
</style>

---

# And also…

<div class="grid grid-cols-3 gap-x-4 gap-y-2 more">
<div>

**Type inference**

```rust
let mut v = Vec::new(); // Vec<?>...
v.push(1u8);            // ...is Vec<u8>
let n: u64 = "42".parse()?; // parse::<u64>
```

</div>
<div>

**Enums with data** (tagged unions)

```rust
enum Shape {
    Circle { r: f64 },
    Rect { w: f64, h: f64 },
}
let area = match s {
    Shape::Circle { r } => PI * r * r,
    Shape::Rect { w, h } => w * h,
}; // forgotten variant: ❌ compile error
```

</div>
<div>

**Generics**

```rust
fn largest<T: PartialOrd + Copy>(xs: &[T]) -> T {
    let mut max = xs[0];
    for &x in xs {
        if x > max { max = x; }
    }
    max
} // one copy per type: zero cost
```

</div>
<div>

**Macros**

```rust
println!("{name} is {age}"); // checked at compile time
let v = vec![1, 2, 3];

#[derive(Debug, Clone, PartialEq)]
struct Point { x: i32, y: i32 }
```

</div>
<div>

**<code>async</code> / <code>await</code>**

```rust
async fn fetch(url: &str) -> reqwest::Result<String> {
    reqwest::get(url).await?.text().await
}
// runtime not in std: Tokio, smol…
```

</div>
<div>

**Threads, checked by the compiler**

```rust
let data = Rc::new(5);
thread::spawn(move || println!("{data}"));
// ❌ `Rc<i32>` cannot be sent
//    between threads safely
let data = Arc::new(5); // ✅ Arc is `Send`
```

</div>
</div>

<style>
.more {
  --slidev-code-font-size: 10px;
  --slidev-code-line-height: 14px;
  --slidev-code-padding: 6px 8px;
  --slidev-code-margin: 0;
}
.more p {
  margin: 0 0 2px;
  font-size: 0.8em;
}
</style>

---

# Scoped references


A reference can never outlive the value it points to

```rust
let r;
{
    let x = 5;
    r = &x;                 // ❌ error: `x` does not live long enough
}                           // `x` is dropped here...
println!("{r}");            // ...while `r` still points to it
```

When the compiler can't infer it, the scope is written as a *lifetime*:

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

<img src="/ferris/does_not_compile.svg" class="abs-tr mt-6 mr-8 w-20" alt="Ferris: this code does not compile" />

---

# Smart pointers

When one owner isn't enough

```rust
let node = Box::new(Node::new());       // Box: on the heap, single owner

let config = Rc::new(load_config());    // Rc: shared ownership, one thread
let also_config = Rc::clone(&config);   //     reference count is now 2

let log = RefCell::new(Vec::new());     // RefCell: mutate through a shared reference,
log.borrow_mut().push("started");       //          borrow rules checked at runtime

let counter = Arc::new(Mutex::new(0));  // Arc + Mutex: shared and mutable
*counter.lock().unwrap() += 1;          //              across threads
```

---

# Not unique to Rust, but part of the package

| Feature | Also found in |
| --- | --- |
| Immutability by default (`let` vs `let mut`) | OCaml, F#, Haskell |
| `unsafe` blocks to opt out of the checks | C#, Go (`unsafe` package) |
| Enums with data and exhaustive `match` | Swift, OCaml, Haskell, Scala |
| Traits instead of inheritance | Go interfaces, Swift protocols, Haskell type classes |
| Deterministic destruction (RAII) | C++ |

---

# Rules you learn from the compiler


**Dyn compatibility** (formerly *object safety*): not every trait can be used as `dyn Trait`

```rust
trait Shape {
    fn area(&self) -> f64;
    fn scale<T: Into<f64>>(&self, factor: T); // generic method
}
let shapes: Vec<Box<dyn Shape>> = Vec::new(); // ❌ the trait `Shape` is not dyn compatible
```

**Orphan rule**: you can't implement a foreign trait for a foreign type

```rust
impl std::fmt::Display for Vec<u8> {          // ❌ only traits defined in the current crate
    /* ... */                                 //    can be implemented for types defined
}                                             //    outside of the crate
```

<img src="/ferris/does_not_compile.svg" class="abs-tr mt-6 mr-8 w-20" alt="Ferris: this code does not compile" />

---

# After the basics, the docs thin out

The book covers the basics — then real signatures in `std` are full of concepts it barely explains

```rust
// AsRef: "anything that can be cheaply viewed as a &Path"
pub fn open<P: AsRef<Path>>(path: P) -> io::Result<File>

// Borrow: like AsRef, but Hash and Eq must behave the same (why? not obvious)
pub fn get<Q: ?Sized>(&self, k: &Q) -> Option<&V>
where
    K: Borrow<Q>,
    Q: Hash + Eq,

// 'static: not "lives forever", but "holds no non-'static references"
pub fn spawn<F, T>(f: F) -> JoinHandle<T>
where
    F: FnOnce() -> T + Send + 'static,
    T: Send + 'static,
```

Explained well elsewhere: [Common Rust lifetime misconceptions](https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md),
[Tour of Rust’s standard library traits](https://github.com/pretzelhammer/rust-blog/blob/master/posts/tour-of-rusts-standard-library-traits.md)

---

# Size matters


`impl Trait` means *one* concrete type, whose size is known at compile time

```rust
fn make_pet(quiet: bool) -> impl Animal {
    if quiet {
        Cat
    } else {
        Dog                 // ❌ `if` and `else` have incompatible types
    }
}
```

The fix: put it behind a pointer, and pay for dynamic dispatch

```rust
fn make_pet(quiet: bool) -> Box<dyn Animal> {
    if quiet { Box::new(Cat) } else { Box::new(Dog) }
}
```

<img src="/ferris/does_not_compile.svg" class="abs-tr mt-6 mr-8 w-20" alt="Ferris: this code does not compile" />

---

# Self-referential structs


A struct can't easily hold a reference into itself

```rust
struct Document<'a> {
    text: String,
    words: Vec<&'a str>,        // slices of `text`
}

fn load<'a>(text: String) -> Document<'a> {
    let words = text.split(' ').collect(); // borrows `text`...
    Document { text, words }    // ❌ cannot move out of `text` because it is borrowed
}
```

Moving the struct would move `text` and leave `words` dangling. Workarounds: store indices
instead of references, crates like `self_cell` or `ouroboros`, or `Pin`.

<img src="/ferris/does_not_compile.svg" class="abs-tr mt-6 mr-8 w-20" alt="Ferris: this code does not compile" />

---

# Graphs and linked lists

Shared ownership and cycles don't fit the "one owner" rule

```rust
struct Node {
    value: i32,
    children: Vec<Rc<RefCell<Node>>>,      // shared, mutable at runtime
    parent: Option<Weak<RefCell<Node>>>,   // weak, to avoid a leak through a cycle
}
```

The idiomatic way out: an arena, with indices instead of pointers

```rust
struct Graph { nodes: Vec<Node> }
struct Node { value: i32, edges: Vec<usize> }  // indices into `Graph::nodes`
```

<div class="text-sm opacity-70 mt-4">

There's a whole book about it: [*Learn Rust With Entirely Too Many Linked Lists*](https://rust-unofficial.github.io/too-many-lists/)

</div>

---

# Design mistakes can mean a rewrite

Ownership choices show up in every signature — changing them ripples through the codebase

```rust
// v1: single-threaded, borrowed configuration
struct App<'a> {
    config: &'a Config,
    cache: HashMap<String, Data>,
}

// v2: now shared between async tasks
struct App {
    config: Arc<Config>,
    cache: Arc<Mutex<HashMap<String, Data>>>,
}
```

Every function that touches `App` changes: lifetimes disappear, locks appear.

---

# Typestate


Encode the state in the type: invalid transitions don't compile

<div class="grid grid-cols-2 gap-4 vs">
<div>

**Python**

```python
class Connection:
    def __init__(self):
        self.connected = False

    def connect(self):
        self.connected = True

    def send(self, msg):
        if not self.connected:
            raise RuntimeError("not connected")
        ...

Connection().send("hi")  # 💥 at runtime
```

</div>
<div>

**Rust**

```rust
struct Disconnected;
struct Connected;
struct Connection<S> { state: S }

impl Connection<Disconnected> {
    fn connect(self) -> Connection<Connected> {
        Connection { state: Connected }
    }
}
impl Connection<Connected> {
    fn send(&self, msg: &str) { /* ... */ }
}

Connection { state: Disconnected }.send("hi");
// ❌ no method `send` on `Connection<Disconnected>`
```

</div>
</div>

<style>
.vs {
  --slidev-code-font-size: 11px;
  --slidev-code-line-height: 16px;
}
</style>

<img src="/ferris/does_not_compile.svg" class="abs-tr mt-6 mr-8 w-20" alt="Ferris: this code does not compile" />
