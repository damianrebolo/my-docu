---
id: w3-cryptography
title: Cryptography
sidebar_label: Cryptography
slug: /w3-cryptography
---

## Cryptography Historically

Historically, up until the 1970s, cryptography was the study of encrypting messages so that they could not be decrypted even if intercepted. Cryptography was used for passing important secrets, especially within the military. The sender would take their message and pass it through a function to create an encrypted output.

As cryptography advanced over the years, more complex functions were introduced to hide messages better. One important leap forward was the idea of a **secret key**.

If two parties can meet prior to their exchange of messages they both can come to an agreement upon a particular key. This key plus a function (like the alphabet shift mentioned above) could be used together to create a more secure encryption.

:::info
Having keys on both sides of the message is considered **symmetric-key cryptography**.
:::

### How could two parties communicate securely without having met beforehand to exchange keys?

In 1976 Whitfield Diffie proposed an idea. What if there was a **public key**?

Let's say there is a **private key** that can decrypt a message from a **public key** and **vice-versa**. Each key is the only key that can decrypt a message encrypted by the other key.

Now imagine `Bob` has declared a **public key** far and wide as the key that identifies him. `Bob` will keep a **private key** that corresponds to his **public key**. When he uses his private key to encrypt a message, he can share it publicly to be decrypted using his **public key**. Upon decrypting this message, we can say beyond the shadow of a doubt that only `Bob` could have written this message. The only key that could have encrypted the message is the corresponding **private key** which only `Bob` has access to. In practice, this would create an unforgeable digital signature for `Bob`.

On the flip side, what if a message was encrypted using `Bob's` **public key**? Of course, anyone can do this since `Bob's` **public key** is available to everyone. The benefit comes in that only `Bob` can decrypt the message. In this way, a friend of `Bob's` can write a message that can only be read by `Bob`. They could send it through any network, regardless of its security so long as it reaches `Bob`. They could rest assured that nobody would be able to decrypt the message except for `Bob`.

:::info
As opposed to the encryption techniques mentioned in the above section, public key cryptography is considered **asymmetric encryption** in that only one party has access to the private key.
:::

## RSA and ECDSA

Today, both **RSA** and **ECDSA** are two popularly used algorithms for `public key cryptography`.

### Hashing Messages

So if you wanted to sign a message with one your keypairs saying that you "Vote Yes on Proposal 327", the first step would be to hash this message:

```js
// turn this into an array of bytes, the expected format for the hash algorithm
const bytes = utf8ToBytes("Vote Yes on Proposal 327");
// hash the message using keccak256
const hash = keccak256(bytes);

console.log(toHex(hash)); // 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be
```

### Signing the Hash

When signing a message with `secp256k1` we can return the signature along with the `recovery bit`, allowing us to recover the **public key** from the signature.

```js
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
  const hash = hashMessage(msg);
  const signatureM = await secp.sign(hash, PRIVATE_KEY, { recovered: true });
  return signatureM;
}

module.exports = signMessage;
```

### Recover the Public Key

When the signature is passed with all of its components (recovery bit included), the public key can be recovered. This means that blockchain nodes will be able to understand who signed the transaction that was sent to them.

A transaction could indicate the user would like to send 1 ether to another address and provide a certain transaction fee. Since the signature signs the hash containing this intention, it is enough to authenticate this action entirely.

```js
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  const hashMsg = hashMessage(message);
  const publicKey = secp.recoverPublicKey(hashMsg, signature, recoveryBit);
  return publicKey;
}

module.exports = recoverKey;
```

### Public Key to Address

Bitcoin and Ethereum both have a transformation process to take a public key and turn it into an address. Ethereum's address transformation is quite simple, its address is the last 20 bytes of the hash of the public key.

```js
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  return keccak256(publicKey.slice(1)).slice(-20);
}

module.exports = getAddress;
```

:::important
The important thing to recognize here is that the address is differentiated from the public key, but you can always derive the address if you have the public key.
:::
