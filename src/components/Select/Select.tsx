import React, { useRef, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';
import { ICurrency } from '@/api/models/currency.dto';
import Chevron from '@/assets/icons/chevron-down.svg';

import { SelectItem } from './SelectItem';
import styles from './Select.module.scss';

type TDropDownProps = {
  options: ICurrency[];
  onChange: (text: string) => void;
};

const DropDown: React.FC<TDropDownProps> = ({ options, onChange }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [value, setValue] = useState(options[0].id);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  const onClick = (obj: ICurrency) => {
    setValue(obj.id);
    onChange(obj.name);
    setOpen(false);
  };

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.dropdown}>
        <div role="presentation" onClick={toggleOpen} className={styles.dropdownName}>
          <p className={styles.dropdownNameTitle}>{value}</p>
          <span className={isOpen ? styles.chevroneDown : ''}>
            <Chevron />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.itemWrapper}>
          {options.map((item) => (
            <SelectItem
              data={item}
              key={item.id}
              handleChange={onClick}
              isSelected={item.id === value}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
