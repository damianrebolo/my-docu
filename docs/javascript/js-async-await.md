---
id: js-async-await
title: Async / await
sidebar_label: Async / await
slug: /async-await
sidebar_position: 5
---

Inside a function marked as `async`, you are allowed to place the `await` keyword in front of an expression that returns a promise. When you do, the execution of the async function is paused until the promise is resolved.

The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure `promise chains`.

`Async` functions always return a `promise`. If the return value of an `async` function is not explicitly a `promise`, it will be implicitly wrapped in a `promise`.

:::tip
The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.
:::

## FetchAvatar example

### Using Promise

```javascript
function fetchAvatar(userId) {
  return fetch("userUrl...")
    .then((response) => response.json())
    .then((data) => data.imageUrl);
}
```

### Using Async / await

```javascript
async function fetchAvatar(userId) {
  const response = await fetch("userUrl...");
  const data = await response.json();
  return data.imageUrl;
}
```

## FetchCatAvatar example

### Using Promises

```javascript
function fetchCatAvatars(userId) {
  return fetch(`userUrl...`)
    .then((response) => response.json())
    .then((user) => {
      const promises = user.cats.map((catId) =>
        fetch(`catUrl...`)
          .then((response) => response.json())
          .then((catData) => catData.imageUrl)
      );
      return Promise.all(promises);
    });
}
```

### Using Async / await

```javascript
async function fetchCatAvatars(userId) {
  const response = await fetch(`userUrl...`);
  const user = await response.json();
  const catImageUrls = [];
  for (const catId of user.cats) {
    const response = await fetch(`catUrl...`);
    const catData = await response.json();
    catImageUrls.push(catData.imageUrl);
  }
  return catImageUrls;
}
```

:::caution
They are not logically equivalent. In the async / await example it will load the cats in sequence while the promised example will load them in parallel, so the promise example is a lot faster.
:::

### Solution

```javascript
async function fetchCatAvatars(userId) {
  const response = await fetch(`userUrl...`);
  const user = await response.json();

  return await Promise.all(
    user.cats.map(async function (catId) {
      const response = await fetch(`catUrl...`);
      const catData = await response.json();
      return catData.imageUrl;
    })
  );
}
```

:::important
If you need to run in parallel use `Promises`, if you need to run in sequence `async / await` is more readable.
:::

## Resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

https://www.youtube.com/watch?v=568g8hxJJp4&t=1140s
