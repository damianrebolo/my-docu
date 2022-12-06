---
id: w3-pow-mining
title: Proof of Work & Mining
sidebar_label: Proof of Work & Mining
slug: /w3-pow-mining
---

Blockchain networks, like Ethereum, are essentially distributed and decentralized databases consisting of many nodes.

In a decentralized environment, common issues are:

- How do all nodes agree on what the current and future state of user account balances and contract interactions is?
- Who gets to add new blocks/transactions to a chain? How do we know any blocks added are "valid"?
- How the heck are all of these things coordinated without any central actor in place?

The answer is **consensus mechanisms**.

**Consensus means coming to a general agreement. Blockchain consensus typically means at least 51% of nodes are in agreement over the current global state of the network.**

## Proof of Work

Proof-of-work is the consensus mechanism that allows decentralized networks like Bitcoin and (previously) Ethereum to come to consensus, or agree on things like account balances and the order of transactions.

The consensus mechanism ends up providing security to a blockchain network just because it demands that everyone follow the consensus rules if they want to participate!

In proof-of-work, **mining** is the "work" itself.

## Mining

Mining is process of creating a block of transactions to be added to a blockchain.

In proof-of-work consensus, nodes in the network continuously attempt to extend the chain with new blocks - these are the **miners**, nodes that contain mining software. Miners are in charge of extending a blockchain by adding blocks that contain "valid" transactions. In order to add a block, the network will ask miners for their `proof-of-work`.

A proof-of-work-based system will typically require miners produce an output in a very difficult-to-get target range. A valid proof-of-work would currently look like this in the Bitcoin network:

`000000000000000000043f43161dc56a08ffd0727df1516c987f7b187f5194c6`

If the hash output is below a target difficulty, then the miner has found the answer to the puzzle: a valid proof of work.

Proof-of-work networks will typically have some sort of `target_difficulty`. In order for a miner to add a new block, they must find a proof-of-work lower than the network target difficulty. It's basically the network saying: "If you want to add a new block, you must provide a proof-of-work with 12 leading zeroes."

The way the math works, finding such a diffcult-to-find output is proof enough that a miner expended considerable resources to secure the network.

### Why do miners expend resources to secure a proof-of-work blockchain network like Ethereum or Bitcoin?

In exchange for the large amounts of energy and hardware upkeep required to run mining software, miners receive currency as a reward. If the consensus rules are followed, making a secure network, miners get paid.

## The Mempool

Users who want to make transactions will broadcast their transactions to the blockchain network. The mempool is a place for miners to keep those transactions before adding them to a block.

Typically, the miner will take all the transactions with the highest transaction fees from the mempool. Then they'll add them to the block and attempt to find the proof of work.

```js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);
}

function mine() {
  let nonce = 0;
  const block = {
    id: blocks.length,
    transactions: mempool.splice(0, 10),
    nonce,
  };
  let hash;
  while (true) {
    hash = SHA256(JSON.stringify(block));
    if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
      break;
    } else {
      block.nonce++;
    }
  }
  blocks.push({
    ...block,
    hash,
  });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

## Why would you use Proof of Work?

One of the first use cases of Proof of Work was to prevent spamming. If a spammer wants to send an email to a million people, they need to come up with a million hashes with three 5s. It becomes computationally expensive for them to do this kind of spamming.

Now you might be wondering: **Could the spammer just use the same hash for all 1 million emails?**

Yes, certainly! Well, that is, unless we build requirements to make each hash unique.
