---
id: re-state
title: React State
sidebar_label: State
slug: /react-state
---

The state is an object that holds information about a certain component. React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.

It's important to mention that not all components in a React app must have state. There are `stateless components` as well which just render its content without the need to store any information, and that's just fine.

:::warning
State change make a React component re-render.
:::

## useState Hook

In order to implement state in our components, React provides us with a hook called `useState`.

```js App.jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
      </div>
    </div>
  );
}

export default App;
```

## useReducer Hook

Another problem may come up when you're using useState where the new state to be set depends on the previous state or when state changes occur very frequently in our application. In these occasions, useState may provoke some unexpected and unpredictable behavior. In come `reducers` to solve this problem.

A `reducer` is a pure function that takes the previous state and an action as an argument, and returns the next state.

**useReducer** is the hook Reacts provides that lets us implement reducers to manage our state.

```js App.jsx
import { useReducer } from "react";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return { count: state.count + 1 };
      case "SUB":
        return { count: state.count - 1 };
      case "ADD10":
        return { count: state.count + 10 };
      case "SUB10":
        return { count: state.count - 10 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count is: {state.count}</p>

      <div>
        <button onClick={() => dispatch({ type: "ADD" })}>Add 1</button>

        <button onClick={() => dispatch({ type: "SUB" })}>Decrease 1</button>

        <button onClick={() => dispatch({ type: "ADD10" })}>Add 10</button>
        <button onClick={() => dispatch({ type: "SUB10" })}>Decrease 10</button>

        <button onClick={() => dispatch({ type: "RESET" })}>Reset count</button>
      </div>
    </div>
  );
}

export default App;
```

## React Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

:::info
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
:::

:::warning
If you only want to avoid passing some props through many levels, `component composition` is often a simpler solution than context.
:::

## React-query

`React Query` is often described as the missing data-fetching library for React, but in more technical terms, it makes `fetching`, `caching`, `synchronizing` and `updating` server state in your React applications a breeze.

While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state.

## Client State Management

### Redux

Redux is a tool that comes to solve prop drilling and unpredictable state behavior on frequent and complex state changes.

### Zustand

A small, fast non-opinionated and scalable barebones state-management solution with a comfy API based on hooks and almost no boilerplate.
