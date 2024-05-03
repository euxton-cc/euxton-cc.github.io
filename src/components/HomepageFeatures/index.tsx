import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  image: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Have you ever wanted to try kayaking or canoeing?',
    image: require('@site/static/img/whitewater.jpg').default,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We can help you out.
      </>
    ),
  },
  {
    title: 'Wondering what type of equipment you need?',
    image: require('@site/static/img/boats.jpg').default,
    description: (
      <>
        We a wide range of boats to try out and experienced coaches to help you progress in your paddling journey.
      </>
    ),
  },
  {
    title: 'Don\'t know where to start?',
    image: require('@site/static/img/sprint.jpg').default,
    description: (
      <>
        Whether you have never been in a boat before or want to top up your existing skills - Euxton Canoe Club is the place for you.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
