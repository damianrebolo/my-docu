---
id: sol-basics
title: Smart Contract - Basics
sidebar_label: Smart Contract - Basics
slug: /sol-basics
---

Solidity's code is encapsulated in contracts. A contract is the fundamental building block of Ethereum applications — all variables and functions belong to a contract, and this will be the starting point of all your projects.

## Version Pragma

All solidity source code should start with a "version pragma" — a declaration of the version of the Solidity compiler this code should use. This is to prevent issues with future compiler versions potentially introducing changes that would break your code.

```
pragma solidity >=0.5.0 <0.6.0;

contract HelloWorld {

}
```

## State Variables

State variables are permanently stored in contract storage. This means they're written to the Ethereum blockchain. Think of them like writing to a DB.

### Unsigned Integers: uint

The uint data type is an unsigned integer, meaning its value must be non-negative. There's also an `int` data type for signed integers.

```
contract Example {
  // This will be stored permanently in the blockchain
  uint myUnsignedInteger = 100;
}
```

:::info
In Solidity, uint is actually an alias for uint256, a 256-bit unsigned integer. You can declare uints with less bits — uint8, uint16, uint32, etc.. But in general you want to simply use uint except in specific cases, which we'll talk about in later lessons.
:::

### String

Strings are used for arbitrary-length UTF-8 data. Ex. string greeting = "Hello world!"

## Math Operations

The following operations are the same as in most programming languages:

- Addition: x + y
- Subtraction: x - y,
- Multiplication: x \* y
- Division: x / y
- Modulus / remainder: x % y (for example, 13 % 5 is 3, because if you divide 5 into 13, 3 is the remainder)

Solidity also supports an exponential operator (i.e. "x to the power of y", x^y):

```
uint x = 5 ** 2; // equal to 5^2 = 25
```

## If statements

If statements in Solidity look just like JavaScript:

```
function eatBLT(string memory sandwich) public {
  // Remember with strings, we have to compare their keccak256 hashes
  // to check equality
  if (keccak256(abi.encodePacked(sandwich)) == keccak256(abi.encodePacked("BLT"))) {
    eat();
  }
}
```

## Structs

Structs allow you to create more complicated data types that have multiple properties.

```
struct Person {
  uint age;
  string name;
}
```

## Arrays

When you want a collection of something, you can use an array. There are two types of arrays in Solidity: fixed arrays and dynamic arrays:

```
// Array with a fixed length of 2 elements:
uint[2] fixedArray;
// another fixed Array, can contain 5 strings:
string[5] stringArray;
// a dynamic Array - has no fixed size, can keep growing:
uint[] dynamicArray;
```

You can also create an array of structs. Using the previous chapter's Person struct:

```
Person[] people; // dynamic Array, we can keep adding to it
```

:::info
Remember that state variables are stored permanently in the blockchain. So creating a dynamic array of structs like this can be useful for storing structured data in your contract, kind of like a database.
:::

### Public Arrays

You can declare an array as public, and Solidity will automatically create a getter method for it. The syntax looks like:

```
Person[] public people;
```

:::info
Other contracts would then be able to read from, but not write to, this array. So this is a useful pattern for storing public data in your contract.
:::

## Working With Structs and Arrays

```
Person satoshi = Person(172, "Satoshi");

// Add that person to the Array:
people.push(satoshi);
```

We can also combine these together and do them in one line of code to keep things clean:

```
people.push(Person(16, "Vitalik"));
```

Note that array.push() adds something to the end of the array, so the elements are in the order we added them. See the following example:

```
uint[] numbers;
numbers.push(5);
numbers.push(10);
numbers.push(15);
// numbers is now equal to [5, 10, 15]
```

## Function Declarations

```
function eatHamburgers(string memory _name, uint _amount) public {

}
```

This is a function named eatHamburgers that takes 2 parameters: a string and a uint. Note that we're specifying the function visibility as public.

We're also providing instructions about where the \_name variable should be stored- in memory. This is required for all reference types such as `arrays`, `structs`, `mappings`, and `strings`.

There are two ways in which you can pass an argument to a Solidity function:

- By value, which means that the Solidity compiler creates a new copy of the parameter's value and passes it to your function. This allows your function to modify the value without worrying that the value of the initial parameter gets changed.
- By reference, which means that your function is called with a... reference to the original variable. Thus, if your function changes the value of the variable it receives, the value of the original variable gets changed.

:::note
It's convention (but not required) to start function parameter variable names with an underscore (\_) in order to differentiate them from global variables. We'll use that convention throughout our tutorial.
:::

### Private / Public Functions

In Solidity, functions are `public` by default. This means anyone (or any other contract) can call your contract's function and execute its code.

Obviously this isn't always desirable, and can make your contract vulnerable to attacks. Thus it's good practice to mark your functions as `private` by default, and then only make `public` the functions you want to expose to the world.

```
function _addToArray(uint _number) private {
  numbers.push(_number);
}
```

This means only other functions within our contract will be able to call this function and add to the numbers array.

As you can see, we use the keyword private after the function name.

:::note
And as with function parameters, it's convention to start private function names with an underscore (\_).
:::

### More on Function Visibility: Internal and External

In addition to `public` and `private`, Solidity has two more types of visibility for functions: `internal` and `external`

`Internal` is the same as `private`, except that it's also accessible to contracts that inherit from this contract.

`External` is similar to `public`, except that these functions can ONLY be called outside the contract — they can't be called by other functions inside that contract.

### Return values

To return a value from a function, the declaration looks like this:

```
string greeting = "What's up dog";

function sayHello() public returns (string memory) {
  return greeting;
}
```

In Solidity, the function declaration contains the type of the return value (in this case `string`).

### Handling Multiple Return Values

```
function multipleReturns() internal returns(uint a, uint b, uint c) {
  return (1, 2, 3);
}

function processMultipleReturns() external {
  uint a;
  uint b;
  uint c;
  // This is how you do multiple assignment:
  (a, b, c) = multipleReturns();
}

// Or if we only cared about one of the values:
function getLastReturnValue() external {
  uint c;
  // We can just leave the other fields blank:
  (,,c) = multipleReturns();
}
```

### Function modifiers

The above function doesn't actually change state in Solidity — e.g. it doesn't change any values or write anything.

So in this case we could declare it as a view function, meaning it's only viewing the data but not modifying it:

```
function sayHello() public view returns (string memory) {
  return greeting;
}
```

### Pure functions

Solidity also contains `pure` functions, which means you're not even accessing any data in the app. Consider the following:

```
function _multiply(uint a, uint b) private pure returns (uint) {
  return a * b;
}
```

## Typecasting

Sometimes you need to convert between data types. Take the following example:

```
uint8 a = 5;
uint b = 6;
// throws an error because a * b returns a uint, not uint8:
uint8 c = a * b;
// we have to typecast b as a uint8 to make it work:
uint8 c = a * uint8(b);
```

In the above, `a * b` returns a `uint`, but we were trying to store it as a `uint8`, which could cause potential problems. By casting it as a `uint8`, it works and the compiler won't throw an error.

## Keccak256

Ethereum has the hash function `keccak256` built in, which is a version of `SHA3`. A hash function basically maps an input into a random 256-bit hexadecimal number. A slight change in the input will cause a large change in the hash.

`keccak256` expects a single parameter of type bytes. This means that we have to "pack" any parameters before calling `keccak256`:

```
//6e91ec6b618bb462a4a6ee5aa2cb0e9cf30f7a052bb467b0ba58b8748c00d2e5
keccak256(abi.encodePacked("aaaab"));
//b1f078126895a1424524de5321b339ab00408010b7cf0e6ed451514981e58aa9
keccak256(abi.encodePacked("aaaac"));
```

## Events

`Events` are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for certain events and take action when they happen.

```
event IntegersAdded(uint x, uint y, uint result);

function add(uint _x, uint _y) public returns (uint) {
  uint result = _x + _y;
  // fire an event to let the app know the function was called:
  emit IntegersAdded(_x, _y, result);
  return result;
}
```

Your app front-end could then listen for the event. A JavaScript implementation would look something like:

```
YourContract.IntegersAdded(function(error, result) {
  // do something with result
})
```

## Mappings

Mappings are another way of storing organized data in Solidity.

```
// For a financial app, storing a uint that holds the user's account balance:
mapping (address => uint) public accountBalance;
// Or could be used to store / lookup usernames based on userId
mapping (uint => string) userIdToName;
```

A mapping is essentially a key-value store for storing and looking up data. In the first example, the key is an `address` and the value is a `uint`, and in the second example the key is a `uint` and the value a `string`.

## msg.sender

In Solidity, there are certain global variables that are available to all functions. One of these is `msg.sender`, which refers to the `address` of the person (or smart contract) who called the current function.

:::note
In Solidity, function execution always needs to start with an external caller. A contract will just sit on the blockchain doing nothing until someone calls one of its functions. So there will always be a msg.sender.
:::

```
mapping (address => uint) favoriteNumber;

function setMyNumber(uint _myNumber) public {
  // Update our `favoriteNumber` mapping to store `_myNumber` under `msg.sender`
  favoriteNumber[msg.sender] = _myNumber;
  // ^ The syntax for storing data in a mapping is just like with arrays
}

function whatIsMyNumber() public view returns (uint) {
  // Retrieve the value stored in the sender's address
  // Will be `0` if the sender hasn't called `setMyNumber` yet
  return favoriteNumber[msg.sender];
}
```

## Require

`Require` makes it so that the function will throw an error and stop executing if some condition is not true:

```
function sayHiToVitalik(string memory _name) public returns (string memory) {
  // Compares if _name equals "Vitalik". Throws an error and exits if not true.
  // (Side note: Solidity doesn't have native string comparison, so we
  // compare their keccak256 hashes to see if the strings are equal)
  require(keccak256(abi.encodePacked(_name)) == keccak256(abi.encodePacked("Vitalik")));
  // If it's true, proceed with the function:
  return "Hi!";
}
```

## Inheritance

```
contract Doge {
  function catchphrase() public returns (string memory) {
    return "So Wow CryptoDoge";
  }
}

contract BabyDoge is Doge {
  function anotherCatchphrase() public returns (string memory) {
    return "Such Moon BabyDoge";
  }
}
```

`BabyDoge` inherits from `Doge`. That means if you compile and deploy `BabyDoge`, it will have access to both `catchphrase()` and `anotherCatchphrase()` (and any other public functions we may define on `Doge`).

This can be used for logical inheritance (such as with a subclass, a `Cat` is an `Animal`). But it can also be used simply for organizing your code by grouping similar logic together into different contracts.

## Import

When you have multiple files and you want to import one file into another, Solidity uses the `import` keyword:

```
import "./someothercontract.sol";

contract newContract is SomeOtherContract {

}
```

## Storage vs Memory (Data location)

In Solidity, there are two locations you can store variables — in storage and in memory.

:::info
Storage refers to variables stored permanently on the blockchain. Memory variables are temporary, and are erased between external function calls to your contract. Think of it like your computer's hard disk vs RAM.
:::

Most of the time you don't need to use these keywords because Solidity handles them by default. State variables (variables declared outside of functions) are by default storage and written permanently to the blockchain, while variables declared inside functions are memory and will disappear when the function call ends.

However, there are times when you do need to use these keywords, namely when dealing with `structs` and `arrays` within functions:

```
contract SandwichFactory {
  struct Sandwich {
    string name;
    string status;
  }

  Sandwich[] sandwiches;

  function eatSandwich(uint _index) public {
    // Sandwich mySandwich = sandwiches[_index];

    // ^ Seems pretty straightforward, but solidity will give you a warning
    // telling you that you should explicitly declare `storage` or `memory` here.

    // So instead, you should declare with the `storage` keyword, like:
    Sandwich storage mySandwich = sandwiches[_index];
    // ...in which case `mySandwich` is a pointer to `sandwiches[_index]`
    // in storage, and...
    mySandwich.status = "Eaten!";
    // ...this will permanently change `sandwiches[_index]` on the blockchain.

    // If you just want a copy, you can use `memory`:
    Sandwich memory anotherSandwich = sandwiches[_index + 1];
    // ...in which case `anotherSandwich` will simply be a copy of the
    // data in memory, and...
    anotherSandwich.status = "Eaten!";
    // ...will just modify the temporary variable and have no effect
    // on `sandwiches[_index + 1]`. But you can do this:
    sandwiches[_index + 1] = anotherSandwich;
    // ...if you want to copy the changes back into blockchain storage.
  }
}
```
