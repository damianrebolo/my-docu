---
id: ioc
title: Inversion of Control
sidebar_label: Inversion of control
slug: /ioc
---

## A simple principle that can drastically improve your reusable code

:::important

In software engineering, inversion of control (IoC) is a programming principle

:::

IoC inverts the flow of control as compared to traditional control flow. In IoC, custom-written portions of a computer program receive the flow of control from a generic framework. A software architecture with this design inverts control as compared to traditional procedural programming: in traditional programming, the custom code that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom, or task-specific, code.

:::important

Inversion of control is used to increase modularity of the program and make it extensible, and has applications in object-oriented programming and other programming paradigms.

:::

:::caution

The term is related to, but different from, the dependency inversion principle, which concerns itself with decoupling dependencies between high-level and low-level layers through shared abstractions.

:::

There's also patterns that you may be familiar with that are basically a form of inversion of control. My favorite pattern for this is _"Compound Components"_.

### Compound Components

Let's say you want to build a _Menu_ component that has a button for opening the menu and a list of menu items to display when it's clicked. Then when an item is selected, it will perform some action. A common approach to this kind of component is to create props for each of these things:

```javascript
function App() {
  return (
    <Menu
      buttonContents={
        <>
          Actions <span aria-hidden>▾</span>
        </>
      }
      items={[
        { contents: 'Download', onSelect: () => alert('Download') },
        { contents: 'Create a Copy', onSelect: () => alert('Create a Copy') },
        { contents: 'Delete', onSelect: () => alert('Delete') }
      ]}
    />
  );
}
```

This allows us to customize a lot about our Menu item. But what if we wanted to insert a line before the Delete menu item? Would we have to add an option to the items objects? Like, I don't know: `precedeWithLine?` Yikes. Maybe we'd have a special kind of menu item that's a `{contents: <hr />}`. I guess that would work, but then we'd have to handle the case where no `onSelect` is provided. And it's honestly an awkward API.

When you're thinking about how to create a nice API for people who are trying to do things slightly differently, instead of reaching for `if` statements and ternaries, consider the possibility of inverting control. In this case, what if we just gave rendering responsibility to the user of our menu? Let's use one of React's greatest strengths of composibility:

```javascript
function App() {
  return (
    <Menu>
      <MenuButton>
        Actions <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
        <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
        <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
}
```

The key thing to notice here is that there's no state visible to the user of the components. The state is implicitly shared between these components. That's the primary value of the compound components pattern. By using that capability, we've given some rendering control over to the user of our components and now adding an extra line in there (or anything else for that matter) is pretty trivial and intuitive. **No API docs to look up, and no extra features, code, or tests to add. Big win for everyone.**

## Resources

https://en.wikipedia.org/wiki/Inversion_of_control

https://dev.to/lowe1111/use-the-inversion-of-control-pattern-with-react-4k72

https://kentcdodds.com/blog/inversion-of-control

https://kentcdodds.com/blog/compound-components-with-react-hooks
