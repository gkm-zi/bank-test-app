import React, { useState } from 'react';

import { useFetchCurrencyQuery } from '@/api/currencyApi';

import { Cat } from '../Cat';
import { Logo } from '../Logo';
import { Loader } from '../Loader';
import { Select } from '../Select';
import { HeroText } from '../HeroText';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { data } = useFetchCurrencyQuery();
  const [activeCurrency, setActiveCurrency] = useState('');

  if (!data) return <Loader />;

  const onChangeCurrency = (currency: string) => {
    setActiveCurrency(currency);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Logo />
            <Select options={data} onChange={onChangeCurrency} />
          </div>

          <div className={styles.catImage}>
            <Cat />
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <HeroText text={activeCurrency || data[0].name} />
      </div>
    </div>
  );
};

export default Header;
