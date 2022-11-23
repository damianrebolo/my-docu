---
id: rt-custom-hook
title: Custom Hook
sidebar_label: Custom Hook
slug: /custom-hook
sidebar_position: 5
---

```javascript
import { useState, useCallback } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((x) => x + 1), []);

  return { count, increment };
}
```

```javascript
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

test("should increment", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```
