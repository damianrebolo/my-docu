---
id: js-spread-syntax
title: Spread Syntax
sidebar_label: Spread Syntax
slug: /spread-syntax
sidebar_position: 2
---

**Spread syntax (...)** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

### Spread in function calls

```javascript
function myFunction(x, y, z) {}
let args = [0, 1, 2];
myFunction(...args);
```

### Spread in array literals

```javascript
let parts = ["shoulders", "knees"];
let lyrics = ["head", ...parts, "and", "toes"];
```

### Spread in object literals

```javascript
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

## Resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://reactpatterns.com/#jsx-spread-attributes
