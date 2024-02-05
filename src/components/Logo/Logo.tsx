import React from 'react';

import styles from './Logo.module.scss';

interface ILogo {}

const Logo: React.FC<ILogo> = () => (
  <div className={styles.logo}>
    <h1 className={styles.title}>CAT</h1>
    <h2 className={styles.subtitle}>currencies academic terms</h2>
  </div>
);

export default Logo;
