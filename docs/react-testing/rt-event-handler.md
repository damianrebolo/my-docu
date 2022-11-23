---
id: rt-event-handler
title: Event Handler
sidebar_label: Event Handler
slug: /event-handler
sidebar_position: 5
---

```javascript
import React from "react";

export const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title: string,
  }
> = ({ title, ...props }) => <button {...props}>{title}</button>;
```

```javascript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonWrapper } from "./ButtonWrapper";

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add Item" />);
  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
```
