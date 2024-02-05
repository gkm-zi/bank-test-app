import React from 'react';

import styles from './HeroText.module.scss';

interface IHeroText {
  text: string;
}

const HeroText: React.FC<IHeroText> = ({ text }) => (
  <div className={styles.textWrapper}>
    <p className={styles.text}>{text}</p>
  </div>
);

export default HeroText;
