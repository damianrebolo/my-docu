---
id: js-closure
title: What is a closure?
sidebar_label: What is a Closure?
slug: /closure
---

A closure is the combination of a function bundled together _(enclosed)_ with references to its surrounding state _(the lexical environment)_. In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Closures are important because they control what is and isn’t in scope in a particular function, along with which variables are shared between sibling functions in the same containing scope. Understanding how variables and functions relate to each other is critical to understanding what’s going on in your code, in both functional and object oriented programming styles.

:::important
Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions, and other functional programming patterns.
:::

### Example 1

```javascript
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

`init()` creates a local variable called name and a function called `displayName()`. The `displayName()` function is an inner function that is defined inside `init()` and is available only within the body of the `init()` function. Note that the `displayName()` function has no local variables of its own. However, since inner functions have access to the variables of outer functions, `displayName()` can access the variable name declared in the parent function, `init()`.

### Example 2

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

Running this code has exactly the same effect as the previous example of the `init()` function above. What's different (and interesting) is that the `displayName()` inner function is returned from the outer function _before being executed_.

In this case, myFunc is a reference to the instance of the function `displayName` that is created when makeFunc is run. The instance of `displayName` maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and **"Mozilla"** is passed to alert.

## Example 3

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

`add5` and `add10` are both closures. They share the same function body definition, but store different _lexical environments_. In `add5's` _lexical environment_, `x` is `5`, while in the _lexical environment_ for `add10`, `x` is `10`.

### Example 4 - Practical closures

Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

```javascript
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`, `size14`, and `size16` are now functions that resize the body text to 12, 14, and 16 pixels, respectively. You can attach them to buttons (in this case hyperlinks) as demonstrated in the following code example.

## Closure Scope Chain

Every closure has three scopes:

- Local Scope (Own scope)
- Outer Functions Scope
- Global Scope

```javascript
// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20
```

## Performance considerations

It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, as it will negatively affect script performance both in terms of processing speed and memory consumption.

## Resources

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
