---
id: tok-tokens
title: Tokens
sidebar_label: Tokens
slug: /tokens
---

## Tokens on Ethereum

A token on Ethereum is basically just a smart contract that follows some common rules — namely it implements a standard set of functions that all other token contracts share, such as `transferFrom(address _from, address _to, uint256 _amount)` and `balanceOf(address _owner)`.

Internally the smart contract usually has a mapping, `mapping(address => uint256) balances`, that keeps track of how much balance each address has.

So basically a token is just a contract that keeps track of who owns how much of that token, and some functions so those users can transfer their tokens to other addresses.

### Why does it matter?

Since all ERC20 tokens share the same set of functions with the same names, they can all be interacted with in the same ways.

This means if you build an application that is capable of interacting with one ERC20 token, it's also capable of interacting with any ERC20 token. That way more tokens can easily be added to your app in the future without needing to be custom coded. You could simply plug in the new token contract address, and boom, your app has another token it can use.

One example of this would be an exchange. When an exchange adds a new ERC20 token, really it just needs to add another smart contract it talks to. Users can tell that contract to send tokens to the exchange's wallet address, and the exchange can tell the contract to send the tokens back out to users when they request a withdraw.

The exchange only needs to implement this transfer logic once, then when it wants to add a new ERC20 token, it's simply a matter of adding the new contract address to its database.

### Other token standards

ERC20 tokens are really cool for tokens that act like currencies.

ERC721 tokens are not interchangeable since each one is assumed to be unique, and are not divisible. You can only trade them in whole units, and each one has a unique ID.

## ERC721: Transfer Logic

Note that the ERC721 spec has 2 different ways to transfer tokens:

`function transferFrom(address _from, address _to, uint256 _tokenId) external payable;`

The token's owner calls `transferFrom` with his `address` as the `_from` parameter, the `address` he wants to transfer to as the `_to` parameter, and the `_tokenId` of the token he wants to transfer.

`function approve(address _approved, uint256 _tokenId) external payable;`
`function transferFrom(address _from, address _to, uint256 _tokenId) external payable;`

The token's owner first calls `approve` with the address he wants to transfer to, and the `_tokenID` . The contract then stores who is approved to take a token, usually in a `mapping (uint256 => address)`. Then, when the owner or the approved address calls `transferFrom`, the contract checks if that `msg.sender` is the owner or is approved by the owner to take the token, and if so it transfers the token to him.

Notice that both methods contain the same transfer logic. In one case the sender of the token calls the `transferFrom` function; in the other the owner or the approved receiver of the token calls it.
