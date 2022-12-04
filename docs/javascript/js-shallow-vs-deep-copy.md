---
id: js-shallow-vs-deep-copy
title: Shallow Vs Deep Copy
sidebar_label: Shallow Vs Deep Copy
slug: /shallow-vs-deep-copy
sidebar_position: 6
---

Let's try to understand the concept of shallow & deep copy in the case of Objects.

```js
const person = {
  name: "Damian",
  age: 34,
};

const copyObj = person;

person.name = "John";
copyObj.age = 45;

console.log(person); // { name: 'John', age: 45 }
console.log(copyObj); // { name: 'John', age: 45 }
```

If we modify the `person` or `copyObj` objects, changes are reflected on both of them. Because both of the objects `refer` to the same `memory location`.

## Shallow Copy

:::info
Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object.

If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.
:::

```js
const person = {
  name: "Damian",
  age: 34,
};

const shallowCopy = { ...person };

person.name = "John";
shallowCopy.age = 45;

console.log(person); // { name: 'John', age: 34 }
console.log(shallowCopy); // { name: 'Damian', age: 45 }
```

Then what is Deep Copy and why do we use it?

## Deep Copy

:::info
Deep copy is a process in which the copying process occurs recursively.
It means first constructing a new collection object and then recursively populating it with copies of the child objects found in the original.

In the case of deep copy, a copy of an object is copied into another object.
:::

### Here the problem of Shallow copy

```js
const person = {
  name: "Damian",
  age: 34,
  address: {
    city: "LA",
  },
};

const shallowCopy = { ...person };

person.name = "John";
person.address.city = "NY";
shallowCopy.age = 45;
shallowCopy.address.city = "CA";

console.log(person); // { name: 'John', age: 34, address: { city: "CA" } }
console.log(shallowCopy); // { name: 'Damian', age: 45, address: { city: "CA" } }
```

If you see the shallowCopy object is having non-primitive values. It has a nested Object. Unlike the previous examples, this object did not have all primitive values in it. So, exactly in this kind of scenario, if we want to create a new copy of the shallowCopy, shallow copying will no longer work.

**To solve this problem we can use cloneDeep function from lodash.**
