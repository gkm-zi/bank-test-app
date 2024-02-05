import React from 'react';

import { HeroText } from '@/ui/HeroText';

import styles from './CurrencyTitle.module.scss';

interface ICurrencyTitle {
  activeCurrency: string;
}

const CurrencyTitle: React.FC<ICurrencyTitle> = ({ activeCurrency }) => (
  <div className={styles.title}>
    <HeroText text={activeCurrency} />
  </div>
);

export default CurrencyTitle;
