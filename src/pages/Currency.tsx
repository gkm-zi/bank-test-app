import React, { useState } from 'react';

import { Loader } from '@/ui/Loader';
import { Header } from '@/components/Header';
import { useFetchCurrencyQuery } from '@/api/currencyApi';
import CurrencyTitle from '@/components/CurrencyTitle/CurrencyTitle';

interface ICurrency {}

const Currency: React.FC<ICurrency> = () => {
  const { data } = useFetchCurrencyQuery();
  const [activeCurrency, setActiveCurrency] = useState('');

  if (!data) return <Loader />;

  const onChangeCurrency = (currency: string) => {
    setActiveCurrency(currency);
  };

  return (
    <>
      <Header data={data} onChange={onChangeCurrency} />
      <CurrencyTitle activeCurrency={activeCurrency || data[0].name} />
    </>
  );
};

export default Currency;
