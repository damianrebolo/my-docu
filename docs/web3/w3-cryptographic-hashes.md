---
id: w3-cryptographic-hashes
title: Cryptographic Hashes
sidebar_label: Cryptographic Hashes
slug: /w3-cryptographic-hashes
---

Cryptographic Hash Functions like SHA256 are one-way functions. This means that if you have the input, it's relatively trivial to find the output. On the other hand, if you have the output, it is infeasible to find the input.

:::warning
For security purposes, it's important to remember to use a random salt which you can add to your input to make it unguessable via the methods mentioned above!
:::

## Find the Color

Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the COLORS array.

- To take the hash of a color, first use utf8ToBytes to translate the string to bytes. Then, use sha256 to hash it.
- When you want to compare two hashes, first use toHex to turn each hash from a Uint8Array to a string of hexadecimal characters.

```js
const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

console.log(toHex(aHash) === toHex(aHash)); // true
console.log(toHex(aHash) === toHex(bHash)); // false
```

:::info
Wondering what utf8 stands for? The UTF-8 standard translates all the possible keyboard characters you can think of into bytes.

This is an agreed upon standard to ensure we all get the same bit values representing the letters and words we see on the screen.
:::

### Implementation

```js
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash
function findColor(hash) {
  const color = COLORS.find(
    (color) => toHex(sha256(utf8ToBytes(color))) === toHex(hash)
  );
  return color;
}

module.exports = findColor;
```
