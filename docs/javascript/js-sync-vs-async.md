---
id: js-sync-vs-async
title: Synchronous vs Asynchronous
sidebar_label: Synchronous vs Asynchronous
slug: /sync-vs-async
sidebar_position: 5
---

:::warning
JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language.
By default, every line in a function executes sequentially, one line at a time. The same is applicable even when you invoke multiple functions in your code. Again, line by line.
:::

## Synchronous JavaScript – How the Function Execution Stack Works

So what happens when you define a function and then invoke it? The JavaScript engine maintains a `stack` data structure called `function execution stack`. The purpose of the `stack` is to track the current function in execution.

### Example 1

```javascript
function f1() {
  // some code
}
function f2() {
  // some code
}
function f3() {
  // some code
}

// Invoke the functions one by one
f1();
f2();
f3();
```

#### It does the following:

- First, f1() goes into the stack, executes, and pops out.
- Then f2() does the same, and finally f3().
- After that, the stack is empty, with nothing else to execute.

### Example 2

```js
function f1() {
  // Some code
}
function f2() {
  f1();
}
function f3() {
  f2();
}
f3();
```

#### It does the following:

- Notice that first f3() gets into the stack, invoking another function, f2().
- So now f2() gets inside while f3() remains in the stack.
- The f2() function invokes f1(). So, time for f1() to go inside the stack with both f2() and f3() remaining inside.
- First, f1() finishes executing and comes out of the stack.
- Right after that f2() finishes, and finally f3().

:::info
The bottom line is that everything that happens inside the `function execution stack` is sequential. This is the `Synchronous` part of JavaScript. JavaScript's main thread makes sure that it takes care of everything in the stack before it starts looking into anything elsewhere.
:::

## Asynchronous JavaScript – How Browser APIs and Promises Work

The word `asynchronous` means not occurring at the same time. Typically, executing things in sequence works well. But you may sometimes need to fetch data from the server or execute a function with a delay, something you do not anticipate occurring NOW. So, you want the code to execute `asynchronously`.

We can classify most asynchronous JavaScript operations with two primary triggers:

- **Browser API/Web API events or functions** These include methods like setTimeout, or event handlers like click, mouse over, scroll, and many more.
- **Promises:** A unique JavaScript object that allows us to perform asynchronous operations.

### How to Handle Browser APIs/Web APIs

Browser APIs like `setTimeout` and event handlers rely on `callback` functions. A callback function executes when an asynchronous operation completes.

#### How the JavaScript Callback Queue Works (aka Task Queue)

JavaScript maintains a queue of callback functions. It is called a callback queue or task queue. A queue data structure is `First-In-First-Out(FIFO)`. So, the callback function that first gets into the queue has the opportunity to go out first.

##### Example

```js
function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  f2();
}

main();
```

:::info
main
f2
f1
:::

###### It does the following:

- The main() function gets inside the call stack.
- It has a console log to print the word main. The console.log('main') executes and goes out of the stack.
- The setTimeout browser API takes place.
- The callback function puts it into the callback queue.
- In the stack, execution occurs as usual, so f2() gets into the stack. The console log of f2() executes. Both go out of the stack.
- The main() also pops out of the stack.
- The event loop recognizes that the call stack is empty, and there is a callback function in the queue.
- The callback function f1() then goes into the stack. Execution starts. The console log executes, and f1() also comes out of the stack.
- At this point, nothing else is in the stack and queue to execute further.

### How the JavaScript Engine Handles Promises

JavaScript engine doesn't use the same `callback queue` we have seen earlier for browser APIs. It uses another special queue called the `Job Queue`.

#### What is the Job Queue in JavaScript?

Every time a promise occurs in the code, the executor function gets into the `job queue`. The event loop works, as usual, to look into the queues but gives priority to the `job queue` items over the `callback queue` items when the stack is free.

##### Example

```js
function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  new Promise((resolve, reject) => resolve("I am a promise")).then((resolve) =>
    console.log(resolve)
  );

  f2();
}

main();
```

:::info
main
f2
I am a promise
f1
:::

###### It does the following:

- The main() function gets inside the call stack.
- It has a console log to print the word main. The console.log('main') executes and goes out of the stack.
- The setTimeout browser API takes place.
- The callback function puts it into the callback queue.
- The Promise takes place.
- The Anonymous function puts it into the Jobs queue.
- In the stack, execution occurs as usual, so f2() gets into the stack. The console log of f2() executes. Both go out of the stack.
- The main() also pops out of the stack.
- The event loop recognizes that the call stack is empty, and there is an anonymous function in the job queue.
- The anonymous function and console.log exectures, anonymous functions comes out of the stack.
- The event loop recognizes that the call stack is empty, and there is a callback function in the queue.
- The callback function f1() then goes into the stack. Execution starts. The console log executes, and f1() also comes out of the stack.
- At this point, nothing else is in the stack and queue to execute further.
