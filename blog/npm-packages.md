---
slug: guide-to-managing-npm-packages
title: Managing npm packages
author: Damian Rebolo
author_title: Front End Engineer @ Ohpen
author_url: https://github.com/damianrebolo
author_image_url: https://media-exp1.licdn.com/dms/image/C4E03AQFFOx_9Ax3T-w/profile-displayphoto-shrink_800_800/0/1517240715219?e=1618444800&v=beta&t=9GAMM96A3SSOk1CuMsdwVpZh1KlfkMSi64yqz38Mkjo
tags: [npm, packages, dependencies]
---

Learning the npm commands of how to install or upgrade packages isn’t hard. What I did find difficult for a long time were the best practices behind it.

<!--truncate-->

### Considerations before adding a package to your project

The first thing to consider here is that there is always a risk to adding a package to your project. Every package you add means another dependability on an external source. Since you have no control over what happens to these packages, there’s a chance others made it or are changing it in ways that could harm your project.

- Someone unpublished their npm packages
- Someone updated a package which broke one of its dependents

It’s a reason to be cautious, but there’s definitely advantages to using packages as well.

- It can save you a lot of time by not reinventing the wheel
- Others have already solved problems that a lot of developers are running into

:::note
**Git packages**
Including git repositories as packages in your project should mostly be used as a last resort. Git is not a package management tool, so it will give you less control over what happens to the package. A Git repository can easily be deleted or updated with breaking changes.
:::

### Which package to pick out of npm’s packages

Anyone who is willing to make an account on npm can publish packages there, so the quality of the packages will vary greatly. There’s a few tips that can help you choose the best one:

- See if it’s used by a lot of developers. A high number of downloads is probably an indicator it’s a useful package to other developers
- Check if it’s still actively maintained. Look at the last release date on npm and go to Github to see if some activity is taking place in the open and closed issues
- Verify the size of the package if they are used client-side
- Make sure the documentation is clear enough to you
- Check the security issues and vulnerabilities of the project

### Dependencies vs devDependencies

As explained by npm, **dependencies** are **“Packages required by your application in production”** and **devDependencies** are **“Packages that are only needed for local development and testing”**.

:::important

When someone installs an npm package, the dependencies of that package will also be installed, but the devDependencies will be ignored.

:::

### peerDependencies

**This kind of dependencies is only intended for packages that are released on npm**, you won’t ever use them in a web project. You would include a peerDependency in your npm package when

1. you expect the projects that include your package to also have that package as a dependency,
2. you need a specific version of that package and
3. your npm package would break when the importing project has a dependency for another version.

### The value of the lock file

Before these lock files existed, you were never entirely sure which versions of packages would be installed and what the differences would be between the project on your computer, your colleagues computer and the server.

Even when your package.json only had fixed versions, no carets or tildes, if the dependencies of your dependencies didn’t have fixed versions, the versions of packages could differ from one install to the other if one of those packages deeper down the tree had been updated.

These days we won’t experience these problems anymore as lock files came to the rescue. Lock files make sure that the whole dependency try is locked, it will save the version of the dependency of a dependency of a package in your dependencies, just as far as your dependencies go. Everyone who runs an install for the project will get exactly the same versions (as long as you commit them). Only after an update they will be changed.

### Keeping your packages up-to-date

One well known problem in the javascript world is the feeling of having updated your packages only yesterday and they already released a new major version again. Updating is often not an easy task, especially as some breaking changes will have you digging deep in the code to make this new version usable again.

:::note

In an ideal world you would keep all your packages up-to-date by running a general npm update or yarn upgrade on a regular basis.

:::

It’s a matter of what is personally important to you, but from my experience, it works well to stick to the following cases in your choice of which packages to update:

- The new version has features you want to use
- There’s a certain bug you are experiencing that can be solved by updating the package that’s causing it
- When you’re using another package that’s asking for a newer version of an already installed package. Usually this will be indicated in the peerDependencies
- Sometimes a package will publish a newer version with significant performance improvements
- The one that speaks for itself, you found out about a security issue in a package

:::important

One important rule is of course not to wait too long before updating the packages that fit in the above list. The longer you wait, the more breaking changes might be released.

:::

:::important

On the other hand, when a new major version has just been released, you might want to wait a little while before you update. Even though the developer will probably do their best to make it bug free, there’s always a risk that some overseen problem comes up just following a release.

:::
