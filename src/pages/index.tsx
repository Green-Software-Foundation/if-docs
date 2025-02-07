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
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">
            The solution to opaque carbon reporting{" "}
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--md" to="https://grnsft.org/if/become-a-watcher ">
              Become a watcher
            </Link>
            <Link
              className="button button--secondary button--md"
              to="/users/quick-start"
            >
              Quick start
            </Link>
          </div>
          <div className={styles.heroVideo}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/msk-55owTeM?si=VyZNWzFzAU4uEiD5"
              title="Introducing Impact Framework - opensource tool to measure software by the Green Software Foundation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Documentation for the Impact Framework />"
    >
      <HomepageHeader />
      <main>
        {/* <Hackathon /> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
