---
id: js-func-programming
title: What is Functional Programming?
sidebar_label: Functional Programming
slug: /functional-programming
---

**Functional programming** (often abbreviated FP) is the process of building software by composing **pure functions**, avoiding **shared state**, **mutable data**, and **side-effects**. Functional programming is **declarative** rather than **imperative**, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

:::important
Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles (listed above)
:::

## Pure function

A **pure function** is a function which:

- Given the same inputs, always returns the same output
- Has no side-effects
- Referential transparency: **You can replace a function call with its resulting value without changing the meaning of the program**

:::important
The reason that you might want to write pure functions is to avoid shared state.
:::

## Shared State

**Shared state** is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes.

:::important
The problem with shared state is that in order to understand the effects of a function, you have to know the entire history of every shared variable that the function uses or affects.

Another common problem associated with shared state is that changing the order in which functions are called can cause a cascade of failures because functions which act on shared state are timing dependent.
:::

## Side Effects

A **side effect** is any application state change that is observable outside the called function other than its return value. Side effects include:

- Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
- Logging to the console
- Writing to the screen
- Writing to a file
- Writing to the network
- Triggering any external process
- Calling any other functions with side-effects

Side effects are mostly avoided in functional programming, which makes the effects of a program much easier to understand, and much easier to test.

:::important
**Side-effect** actions need to be isolated from the rest of your software. If you keep your side effects separate from the rest of your program logic, your software will be much easier to extend, refactor, debug, test, and maintain.
:::

:::note
This is the reason that most front-end frameworks encourage users to manage state and component rendering in separate, loosely coupled modules.
:::

## Mutable Data

An **immutabl** object is an object that can’t be modified after it’s created. Conversely, a **mutable** object is any object which can be modified after it’s created.

Tries use **structural sharing** to share reference memory locations for all the parts of the object which are unchanged after an object has been copied by an operator, which uses less memory, and enables significant performance improvements for some kinds of operations.

:::important
It’s important not to confuse const, with immutability. const creates a variable name binding which can’t be reassigned after creation. const does not create immutable objects. You can’t change the object that the binding refers to, but you can still change the properties of the object, which means that bindings created with const are mutable, not immutable.
:::

## Declarative vs Imperative

Functional programming is a **declarative** paradigm, meaning that the program logic is expressed without explicitly describing the flow control.

**Imperative** programs spend lines of code describing the specific steps used to achieve the desired results — the **flow control: How** to do things.

**Declarative** programs abstract the flow control process, and instead spend lines of code describing the **data flow: What** to do. The how gets abstracted away.

### Imperative Example

```javascript
const doubleMap = numbers => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
};

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]
```

### Declarative Example

```javascript
const doubleMap = numbers => numbers.map(n => n * 2);

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]
```

## Reusability Through Higher Order Functions

Functional programming tends to reuse a common set of functional utilities to process data, FP pulls off its generic utility trickery using **higher order functions**.

A **higher order function** is any function which takes a function as an argument, returns a function, or both. Higher order functions are often used to:

- Abstract or isolate actions, effects, or async flow control using callback functions, promises, monads, etc…
- Create utilities which can act on a wide variety of data types
- Partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition
- Take a list of functions and return some composition of those input functions

## Resources

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

https://www.youtube.com/watch?v=e-5obm1G_FY&t=943s
