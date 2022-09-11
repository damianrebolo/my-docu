---
id: js-func-composition
title: What is Function Composition?
sidebar_label: Function Composition
slug: /function-composition
---

Function composition is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.

Let’s look at this more closely in code. Imagine you want to convert user’s full names to URL slugs to give each of your users a profile page. In order to do that, you need to walk through a series of steps:

1. `split` the name into an array on spaces
2. `map` the name to lower case
3. `join` with dashes
4. `encode` the URI component

```javascript
const toSlug = input =>
  encodeURIComponent(
    input
      .split(' ')
      .map(str => str.toLowerCase())
      .join('-')
  );
```

Imagine each of these operations had a corresponding composable function. This could be written as:

```javascript
const toSlug = input => encodeURIComponent(join('-')(map(toLowerCase)(split(' ')(input))));

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'
```

This looks even harder to read than our first attempt, but hang in there, this is going somewhere.

In order to accomplish this, we’re using composable forms of common utilities like `split()`, `join()` and `map()`. Here are the implementations:

```javascript
const curry = fn => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));
```

With the exception of `toLowerCase()`, production-tested versions of all of these functions are available from Lodash/fp. You can import them like this:

```npm
import { curry, map, join, split } from 'lodash/fp';
```

That looks like a lot of nesting to me, and it’s a bit confusing to read. We can flatten the nesting with a function that will compose these functions for us automatically, meaning that it will take the output from one function and automatically patch it to the input of the next function until it spits out the final value.

Takes a list of values and applies a function to each of those values, accumulating a single result. The values themselves can be functions. The function is called `reduce()`, (from right to left).

```javascript
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const toSlug = compose(encodeURIComponent, join('-'), map(toLowerCase), split(' '));

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'
```

Of course, `compose()` comes with lodash/fp as well:

```npm
import { compose } from 'lodash/fp';
```

But what if you want to think in terms of the sequence from left to right? There’s another form commonly called `pipe()`. Lodash calls it `flow()`:

```javascript
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const fn1 = s => s.toLowerCase();
const fn2 = s => s.split('').reverse().join('');
const fn3 = s => s + '!';

const newFunc = pipe(fn1, fn2, fn3);
const result = newFunc('Time'); // emit!
```

So, let's look at our `toSlug()` function implemented with `pipe()`:

```javascript
const toSlug = pipe(split(' '), map(toLowerCase), join('-'), encodeURIComponent);

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'
```

For me, this is much easier to read.

Frequently use pipes to eliminate the need for intermediary variables which exist only to hold transient values between one operation and the next.

:::important
That may sound weird at first, but as you get practice with it, you’ll find that in functional programming, you’re working with very abstract, generalized functions in which the names of things don’t matter so much. Names just get in the way. You may start to think of variables as unnecessary boilerplate.
:::

## Resources

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0

https://github.com/lodash/lodash/wiki/FP-Guide
