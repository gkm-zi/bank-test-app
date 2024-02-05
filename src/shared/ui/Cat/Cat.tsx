import React from 'react';

import KittenImage from '@/assets/image/Kitten.svg';

import styles from './Cat.module.scss';

interface ICat {}

const Cat: React.FC<ICat> = () => (
  <div className={styles.imageBox}>
    <KittenImage />
  </div>
);

export default Cat;
