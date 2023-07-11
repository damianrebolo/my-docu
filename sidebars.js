/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // mySidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  mySidebar: [
    {
      type: "category",
      label: "Principles",
      items: ["principles/pr-ioc-react", "principles/pr-solid"],
    },
    {
      type: "category",
      label: "JavaScript",
      items: [
        "javascript/js-variables",
        "javascript/js-spread-syntax",
        "javascript/js-destructuring-assignment",
        "javascript/js-introduction-to-events",
        "javascript/js-closure",
        "javascript/js-objects-in-js",
        "javascript/js-async-await",
        "javascript/js-sync-vs-async",
        "javascript/js-shallow-vs-deep-copy",
      ],
    },
    {
      type: "category",
      label: "React",
      items: ["react/re-lifecycle", "react/re-state", "react/re-memoization"],
    },
    {
      type: "category",
      label: "React Testing",
      items: [
        "react-testing/rt-basic-component",
        "react-testing/rt-multiple-elements",
        "react-testing/rt-event-handler",
        "react-testing/rt-state-hook",
        "react-testing/rt-async-hook",
        "react-testing/rt-custom-hook",
        "react-testing/rt-async-custom-hook",
      ],
    },
    {
      type: "category",
      label: "Security",
      items: ["security/se-http-headers"],
    },
    {
      type: "category",
      label: "Web3",
      items: [
        "web3/w3-history",
        "web3/w3-cryptographic-hashes",
        "web3/w3-cryptography",
        "web3/w3-pow-mining",
        "web3/w3-blockchain-architecture",
        "web3/w3-trees-data-structure",
      ],
    },
    {
      type: "category",
      label: "Ethereum",
      items: ["eth/sol-basics", "eth/sol-advanced", "eth/tok-tokens"],
    },
  ],
};

module.exports = sidebars;
