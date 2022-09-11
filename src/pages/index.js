import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__summary">
          I'm a Software Developer who has worked on a wide range of projects,
          for both start ups and well established companies. I specialized in
          full stack web development and have used several web technologies
          during my career.
        </p>
        <p className="hero__summary">
          For the last 6 years I’ve been focused on front-end development,
          building real time single page applications. I’ve been coding,
          implementing a clean architecture and leading teams.
        </p>
        <p className="hero__summary">
          Being interested in crypto, I started investing in 2022, and decided
          it was time to pursue a career in it.
        </p>{" "}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
