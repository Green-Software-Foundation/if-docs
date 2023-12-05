import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Measure',
    Svg: require('@site/static/img/measure.svg').default,
    description: (
      <>Measure the energy and carbon impacts of your applications.</>
    ),
  },
  {
    title: 'Monitor',
    Svg: require('@site/static/img/monitor.svg').default,
    description: (
      <>Continuous integration allows you to track your impact over time.</>
    ),
  },
  {
    title: 'Mitigate',
    Svg: require('@site/static/img/mitigate.svg').default,
    description: (
      <>
        Scenario testing can support your mitigation strategy and quantify its
        effect.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export function Disclaimer() {
  return (
    <>
      <div className={styles.disclaimer}>
        This project is an <b>incubation project</b> being run inside the Green Software Foundation; as such, we DON’T recommend using it in any critical use case. Incubation projects are experimental, offer no support guarantee, have minimal governance and process, and may be retired at any moment. This project may one day Graduate, in which case this disclaimer will be removed.
      </div>
    </>
  );
}
