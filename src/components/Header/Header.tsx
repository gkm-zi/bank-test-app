import React from 'react';

import { Cat } from '@/ui/Cat';
import { Logo } from '@/ui/Logo';
import { ICurrency } from '@/api/models/currency.dto';

import { Select } from '../Select';

import styles from './Header.module.scss';

interface IHeader {
  data: ICurrency[];
  onChange: (text: string) => void;
}

const Header: React.FC<IHeader> = ({ data, onChange }) => (
  <div className={styles.wrapper}>
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Logo />
          <Select options={data} onChange={onChange} />
        </div>
        <div className={styles.catImage}>
          <Cat />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
