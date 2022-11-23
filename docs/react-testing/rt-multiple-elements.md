---
id: rt-multiple-elements
title: Multiple Elements
sidebar_label: Multiple Elements
slug: /multiple-elements
sidebar_position: 5
---

```javascript
import React from "react";

export const SideBar = ({
  items,
}: {
  items: { name: string, href: string }[],
}) => (
  <div>
    {items.map((item) => (
      <div key={item.href}>
        <a role="navigation" href={item.href}>
          {item.name}
        </a>
      </div>
    ))}
  </div>
);
```

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

test("renders a name", () => {
  const items = [
    {
      name: "test",
      href: "/test",
    },
  ];
  render(<SideBar items={items} />);
  const anchorElements = screen.getAllByRole("navigation");
  expect(anchorElements[0]).toHaveTextContent(items[0].name);
  expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
});
```
