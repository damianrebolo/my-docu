---
id: re-lifecycle
title: Lifecycle
sidebar_label: Lifecycle
slug: /react-lifecycle
---

A React component undergoes three phases in its lifecycle: **mounting**, **updating**, and **unmounting**.

- The `mounting phase` is when a new component is created and inserted into the DOM or, in other words, when the life of a component begins. This can only happen once, and is often called “initial render.”

- The `updating phase` is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated. This phase can occur multiple times, which is kind of the point of React.

- The last phase within a component's lifecycle is the `unmounting phase`, when the component is removed from the DOM.

## React Hooks and the component lifecycle

The release of React 16.8 Hooks were introduced and empowered developers to access state from functional components, instead of writing an entire class. With this change, building components became easier and less verbose.

The two most common default hooks are `useState` and `useEffect`. The `useState` hook gives state to the functional component, and `useEffect` allows you to add side effects within it (like **after initial render**), which aren’t allowed within the function's main body. You can also act upon updates on the state with `useEffect`.

### useState

The `useState` hook is used to store state for a functional component. This hook accepts one parameter: `initialState`, which will be set as the initial stateful value, and returns two values: the stateful value, and the update function to update the stateful value. The update function accepts one argument, `newState`, which replaces the existing stateful value.

### useEffect

The `useEffect` hook accepts a function as an argument, where you write all your `side effects`. This function is invoked after every browser paint and before any new renders. This function can return another function called the `clean-up function`, which can be used to clean up the side effects (i.e. when the component is destroyed) like unsubscribing to a store.
