import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built In Python',
    description: (
      <>
        Lemon is written in Python, and is designed like React and Vue. It's easy to learn and use.
      </>
    ),
  },
  {
    title: 'Component Based',
    description: (
      <>
        Lemon is component based, all of the page is designed in components to render and control the page.
      </>
    ),
  },
  {
    title: 'Full-Stack',
    description: (
      <>
        Lemon is a full-stack framework, it has a built-in server and database, and it's easy to use.
      </>
    ),
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
