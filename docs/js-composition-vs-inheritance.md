---
id: js-comp-vs-inheitance
title: Composition Over Inheritance
sidebar_label: Composition Over Inheritance
slug: /composition-over-inheritance
---

**Inheritance** is when you design your types after what they _are_, while **composition** is when you design your types after what they _can do_.

Let’s first talk about inheritance for a bit. Let’s say that we are designing a game, and I need a _Dog_:

```
Dog
  .bark();
```

After a while, we realize that our software, like everything, needs Cats, so we create a _Cat_ class:

```
Cat
  .meow()
```

Because nature calls, we add **.poop()** to the _Cat_ and the _Dog_ class:

```
Dog
 .poop()
 .bark()
Cat
 .poop()
 .meow()
```

:::caution
That’s duplication, so we lift **.poop()** into a shared _Animal_ class.
:::

```
Animal
 .poop()
   Dog
    .bark()
   Cat
    .meow()
```

Now that we have a lot of animals pooping everywhere, we need a _CleaningRobot_:

```
CleaningRobot
 .drive()
 .clean()
```

You also need a _MurderRobot_ that can **.drive()** and **.kill()** the _Cats_ and _Dogs_ that are **.poop()**ing all over your white floors:

```
MurderRobot
 .drive()
 .kill()
```

:::caution
Since **.drive()** is now duplicated between _CleaningRobot_ and _MurderRobot_ we create a Robot class to put it in.
:::

```
Robot
 .drive()
   CleaningRobot
    .clean()
   MurderRobot
    .kill()
```

This is what the whole shabang looks like:

```
Robot
 .drive()
    CleaningRobot
     .clean()
    MurderRobot
     .kill()
Animal
 .poop()
    Dog
     .bark()
    Cat
     .meow()
```

**But at this point in the project, without fail, the project manager will say this:**
:::note
_“Our customers demand a MurderRobotDog. It needs to be able to .kill(), .drive(), .bark(), but it cannot poop()._
:::

And now, we’re screwed. We simply cannot fit the _MurderRobotDog_ nicely into this inheritance hierarchy. We could create a new parent object, where you put all the functionality that is shared:

```
GameObject
  .bark()
    Robot
     .drive()
        CleaningRobot
          .clean()
        MurderRobot
          .kill()
          MurderRobotDog
    Animal
     .poop()
        Dog
        Cat
         .meow()
```

:::warning
You end up with a Gorilla/Banana problem — you request a banana, but you end up with a gorilla holding the banana and the entire jungle with it.
:::

:::important
Composition to the rescue!
:::

So, using composition, we would do this instead:

```
dog            = pooper + barker
cat            = pooper + meower
cleaningRobot  = driver + cleaner
murderRobot    = driver + killer
murderRobotDog = driver + killer + barker
```

I’m going to show you how to do this in practice using JavaScript. We are going to do this using normal functions and normal object literals.

```javascript
const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name)
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed)
});
```

So here we have the murderRobotDog factory function:

```javascript
const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};
const bruno = murderRobotDog('bruno');
bruno.bark(); // "Woof, I am Bruno"
```

First, it creates a state object. It assigns some default values to it — speed and position, and also assigns the name from the funciton argument. It then uses something called Object.assign — this is a function that is built into ES6, but there are equivalent methods in all JavaScript libraries. What it does is that it takes an object, in this case a new, empty object, and assign the properties from other objects to it.

So in this case, it creates a barker, a driver, a killer, and then merge them all into the new object, and return it. Hence, we have our MurderRobotDog.

## Resources

https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205
