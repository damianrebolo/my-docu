---
id: rt-basic-component
title: Basic Component
sidebar_label: Basic Component
slug: /basic-component
sidebar_position: 5
---

```javascript
import React from "react";

export const Person = ({ name }: { name: string }) => (
  <div role="contentinfo">Name is {name}</div>
);
```

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

test("renders a name", () => {
  render(<Person name="Jack" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name is Jack");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
```
