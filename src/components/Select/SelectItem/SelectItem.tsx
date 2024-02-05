import React from 'react';

import { ICurrency } from '@/api/models/currency.dto';

import styles from './SelectItem.module.scss';

interface TSelectItem extends React.HTMLAttributes<HTMLDivElement> {
  data: ICurrency;
  isSelected: boolean;
  handleChange: (obj: ICurrency) => void;
}

const SelectItem: React.FC<TSelectItem> = ({ handleChange, isSelected, data, ...other }) => (
  <div
    role="presentation"
    onClick={() => handleChange(data)}
    className={isSelected ? styles.filterItemSelected : styles.filterItem}
    {...other}
  >
    {data.id}
  </div>
);

export default SelectItem;
