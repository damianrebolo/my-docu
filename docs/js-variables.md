---
id: js-variables
title: Variables
sidebar_label: Var - let - const
slug: /js-variables
---

## var Declarations and Hoisting

Hoisting is a mechanism via which variable declarations are moved to the top of their scope before code execution.

```javascript
function myFunction() {
  if (true) {
    var mycolor = 'red';
  }

  console.log(mycolor); // red
}

myFunction();
```

The below code will give you a clear idea of how javascript is reading your code and where exactly is the variable color being created.

```javascript
function myFunction() {
  var mycolor;
  if (true) {
    mycolor = 'red';
  }

  console.log(mycolor); // red
}

myFunction();
```

### let vs var Declarations and Lexical Scopes

Let and const have a block scope but var has function scope.

:::info
Before moving forward the block in javascript is anything between parenthesis like {…}.So one set of parenthesis makes one block. example of a block is below.
:::

```javascript
//ES5
var num = 10;
for (var num = 0; num < 3; num++) {
  console.log(num); //0 1 2
}
console.log(num); //3

//ES6
let num = 10;
for (let num = 0; num < 3; num++) {
  console.log(num); //0 1 2
}
console.log(num); //10
```

### Variable Declaration with let and const

**const** is just like **let** except you can not re-assign it.

```javascript
const x = {
  y: 2
};

x = {
  y: 6
};
// TypeError: Assigment to constant variable

x.y = 6;
console.log(x); // { y: 6 }
```

:::important
In my opinion you should always use const if you don't need to re-assign the variable. We want to minimize mutable state.
:::

## Resources

https://www.youtube.com/watch?v=sjyJBL5fkp8
