---
id: rt-state-hook
title: State Hook
sidebar_label: State Hook
slug: /state-hook
sidebar_position: 5
---

```javascript
import React, { useState } from "react";

export const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};
```

```javascript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

test("handles onClick", () => {
  render(<Counter />);

  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Add One");
  fireEvent.click(buttonElement);

  expect(divElement).toHaveTextContent("Count is 1");
});
```
