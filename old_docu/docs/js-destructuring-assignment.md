---
id: js-destructuring-assignment
title: Destructuring assignment
sidebar_label: Destructuring assignment
slug: /destructuring-assignment
---

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Object destructuring

```javascript
const person = { name: 'chantastic' };
const { name } = person;
```

### Array destructuring

```javascript
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### Function Components destructuring

```javascript
function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}

function Greeting({ name }) {
  return <div>Hi {name}!</div>;
}

// There's a syntax for collecting remaining props into an object.
// It's called rest parameter syntax and looks like this.
function Greeting({ name, ...restProps }) {
  return <div>Hi {name}!</div>;
}
```

## Resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

https://reactpatterns.com/#destructuring-props
