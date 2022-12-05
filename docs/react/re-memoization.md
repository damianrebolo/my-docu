---
id: re-memoization
title: React Memoization
sidebar_label: Memoization
slug: /react-memoization
---

In React, we can optimize our application by avoiding unnecessary component re-render using memoization. Components re-render because of two things: a change in state or a change in props. This is precisely the information we can "cache" to avoid unnecessary re-renders.

## Memo Higher Order Component

We use `React.memo` for Pure components, and what is a pure component then? Well, based on the concept of purity in functional programming paradigms, a function is said to be pure if:

- A function is said to be pure if the return value is determined by its input values only
- The return value is always the same for the same input values.

```js Child.jsx
import React from "react";

export default React.memo(function Child({ name }) {
  return <div>{name}</div>;
});
```

`A higher order component or HOC` is similar to a higher order function in javascript. Higher order functions are functions that take other functions as arguments OR return other functions. React HOCs take a component as a prop, and manipulate it to some end without actually changing the component itself. You can think of this like wrapper components.

## When to Use the useCallback Hook

In reality a new function is being created on every `re-render`. So if a new function is being created, that means we have a new prop and that means our component should `re-render` as well.

```js Counter.jsx
import { useState, useCallback } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount(count + 1), []);

  return <div>{count}</div>;
}
```

What `useCallback` does is to hold on to the value of the function despite the component `re-rendering`, so the prop will remain the same as long as the function value remains the same as well.

In the `array present in the hook`, we can declare variables that would trigger the change of the function value when the variable changes too.

## When to Use the useMemo Hook

`useMemo` is a hook very similar to useCallback, but instead caching a function, useMemo will cache the return value of a function.

```js
const answer = useMemo(() => num + 1, [num]);
```

You can use `useMemo` in a very similar way to the `memo HOC`. The difference is that `useMemo` is a hook with an `array of dependences`, and `memo` is a HOC that accepts as parameter an optional function that uses props to conditionally update the component.

## When to Memoize

Memoization in React is a good tool to have in our belts, but it's not something you should use everywhere. These tools are useful for dealing with functions or tasks that require heavy computation.
