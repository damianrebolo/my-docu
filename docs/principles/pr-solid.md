---
id: pr-solid
title: SOLID Principles
sidebar_label: SOLID Principles
slug: /solid
---

Good code is, in general, characterised by being a mixture of three things:

- **Functional**: The code comes together to create the desired functionality.
- **Maintainable**: It is easy to make alterations, to add new features, and for other developers to understand how the code functions.
- **Robust**: The software is hard to break due to a great test suite, and handles errors appropriately when they happen.

:::info
Software design principles are great, because they are relatively language agnostic; they can be applied regardless of what language you write in.
:::

## What is Solid?

SOLID is an acronym for five separate design principles:

- **Single Responsibility Principle (SRP):** Every function/class/component should do exactly one thing.

- **Open/Closed Principle (OCP):** You should be able to add functionality to some module, without modifying its existing source code (prefer composition to inheritance).

- **Liskov Substitution Principle (LSP):** If B extends A, anywhere you use A you should be able to use B.

- **Interface Segregation Principle (ISP):** Don't make a component rely on props it doesn't care about.

- **Dependency Inversion Principle (DIP):** High-level code shouldn't depend on implementation details - **always use an abstraction.**

:::warning
There is no escaping the fact that the SOLID design principles grew from the Principles of Object Oriented Class Design that featured in Robert Martin's Design Principles and Patterns paper in 2000.

The React library in particular has its roots more in the functional programming paradigm than it does in the OOP paradigm, especially with the hooks system and its reliance on closures.

This means that the application of each of the SOLID principles here may differ from their original implementation in a strict OO language.
:::
