---
id: js-objects-in-js
title: Objects
sidebar_label: Objects
slug: /objects-in-js
---

:::important
In JavaScript, anything that is not a primitive type ( undefined , null , boolean , number , or string ) is an object.
There is not a correct way to create an object in JavaScript.
:::

## This keyword

A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

### Global Context

In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

```javascript
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = 'MDN';
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

### Function Context

Inside a function, the value of this depends on how the function is called.

:::important
Since the following code is not in `strict mode`, and because the value of `this` is not set by the call, `this` will default to the global object, which is `window` in a browser.
:::

```javascript
function f1() {
  return this;
}

f1() === window; // true
```

:::important
In `strict mode`, however, if the value of `this` is not set when entering an execution context, it remains as `undefined`
:::

```javascript
function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined; // true
```

### Class Context

The behavior of `this` in `classes` and functions is similar, since classes are functions under the hood. But there are some differences and caveats.

## This refresher

### bind() method

The **bind()** method creates a new function that, when called, has its this keyword set to the provided value

```javascript
var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var pokemonName = function () {
  console.log(this.getPokeName() + 'I choose you!');
};

// creates new object and binds pokemon. 'this' of pokemon === pokemon now
var logPokemon = pokemonName.bind(pokemon);

logPokemon(); // 'Pika Chu I choose you!'
```

Let’s break it down. When we use the bind() method:

1. the JS engine is creating a new pokemonName instance and binding pokemon as its this variable. It is important to understand that it copies the pokemonName function.
2. After creating a copy of the pokemonName function it is able to call logPokemon(), although it wasn’t on the pokemon object initially. It will now recognizes its properties (Pika and Chu) and its methods.

### call(), apply() method

The call() method calls a function with a given this value and arguments provided individually.

:::info
`call()` and `apply()` serve the exact same purpose. The only difference between how they work is that `call()` expects all parameters to be passed in individually, whereas `apply()` expects an array of all of our parameters.
:::

```javascript
var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algorithms');
// Pika Chu  loves sushi and algorithms

pokemonName.apply(pokemon, ['sushi', 'algorithms']);
// Pika Chu  loves sushi and algorithms
```

## \_\_**proto**\_\_

:::info
\_\_**proto**\_\_ is the property on an object that points out the proprotype that had been set for that object
:::

```javascript
const dog = { sound: 'woof!' };
const myDog = { name: 'My Dog name' };

Object.setPrototypeOf(myDog, dog);
console.log(myDog.__proto__);
//{sound: "woof!"}
```

## Prototype

:::info
prototype is the property on an object that is set as a property if you are using new keyword.
:::

```javascript
var Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

const pichi = new Person('pichiiii');
console.log(pichi.greet());
//Hi, I am pichiiii
```

When a function is called, the arguments to the call are held in the array-like `variable` arguments. For example, in the call myFn(a, b, c), the arguments within myFn's body will contain 3 array-like elements corresponding to (a, b, c).

```javascript
const myFunction = function (a, b, c) {
  console.log(arguments);
};
console.log(myFunction('this is a', 'this is b', 'this is c'));
//Arguments(3) ["this is a", "this is b", "this is c"]
```

## Resources
