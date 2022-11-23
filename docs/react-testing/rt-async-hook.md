---
id: rt-async-hook
title: Async Hook
sidebar_label: Async Hook
slug: /async-hook
sidebar_position: 5
---

```javascript
import React, { useState, useEffect } from "react";

export const APIComponent: React.FunctionComponent = () => {
  const [data, setData] = useState<{
    name: string;
  }>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};
```

```javascript
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import { APIComponent } from "./APIComponent";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<APIComponent />);

  const out = await waitFor(() => screen.getByRole("contentinfo"));

  expect(out).toHaveTextContent("Name is Jack");
});
```
