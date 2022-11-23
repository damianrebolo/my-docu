---
id: rt-async-custom-hook
title: Async Custom Hook
sidebar_label: Async Custom Hook
slug: /async-custom-hook
sidebar_position: 5
---

```javascript
import { useState, useEffect } from "react";

export function useAPI() {
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

  return data;
}
```

```javascript
import { renderHook, act } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { useAPI } from "./useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI());

  await waitForNextUpdate();

  expect(result.current).toEqual({ name: "Jack" });
});
```
