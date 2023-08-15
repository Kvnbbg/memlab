/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall web_perf_infra
 */

import React, {ReactNode, useLayoutEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '../components/CodeBlock';
import TerminalStatic from '../components/TerminalStatic';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import TerminalReplay from '../components/TerminalReplay';
import Showcase from '../components/Showcase';
import startAnimation from '../lib/ContainerAnimation';
import nomralizeTypeSpeed from '../lib/TypeSpeedNormalization';
import homePageStdouts from '../data/HomePageMainTerminal';

interface FeatureItem {
  title: string;
  imageUrl?: string;
  description: ReactNode;
}

const features: FeatureItem[] = [
  {
    title: 'Define Your Test',
    description: (
      <>
        Define E2E test scenarios on browser interaction:
        <CodeBlock
          language="typescript"
          code={`// test.js
function url() {
  return 'https://www.google.com/maps/place/Silicon+Valley,+CA/';
}
async function action(page) {
  await page.click('button[aria-label="Hotels"]');
}
async function back(page) {
  await page.click('[aria-label="Close"]');
}

module.exports = {action, back, url};`}
        />
      </>
    ),
  },
  {
    title: 'Run memlab in CLI',
    description: (
      <>
        Find memory leaks with the custom E2E test scenario:
        <TerminalStatic
          language="bash"
          code={`$ memlab run --scenario test.js`}
        />
        Support memory analyses for the previous browser test:
        <TerminalStatic
          language="bash"
          code={`# Analyze duplicated string in heap
$ memlab analyze string
# Check unbound object growth
$ memlab analyze unbound-object
# Get shapes with unbound growth
$ memlab analyze unbound-shape
# Discover more memory analyses
$ memlab analyze -h`}
        />
      </>
    ),
  },
  {
    title: 'Programming API',
    description: (
      <>
        Memory analysis for JavaScript heap snapshots:
        <CodeBlock
          language="typescript"
          code={`const {findLeaks, takeSnapshots} = require('@memlab/api');

async function test() {
  const scenario = {
    url: () => 'https://www.facebook.com',
  };
  const result = await takeSnapshots({scenario});
  const leaks = findLeaks(result);
  // ...
}`}
        />
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const stdouts = nomralizeTypeSpeed(homePageStdouts);

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const headerContainerID = 'css-animated-bg-container';

  useLayoutEffect(() => {
    startAnimation(headerContainerID);
  }, []);

  return (
    <Layout description="memlab is an E2E testing, memory leak detection, and heap analysis framework for front-end JavaScript.">
      <header
        id={headerContainerID}
        className={clsx('hero hero--primary', styles.heroBanner)}>
        <div id="header-container" className="container">
          <div id="left-header-section" className="container-section">
            <h1 id="title" className="hero__title">
              {siteConfig.title}
            </h1>
            <p id="sub-title" className="hero__subtitle">
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                id="learn-more"
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/getting-started')}>
                Learn more
              </Link>
            </div>
          </div>
          <div className="container-section">
            <TerminalReplay stdouts={stdouts} />
          </div>
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
        <Showcase />
      </main>
    </Layout>
  );
}
