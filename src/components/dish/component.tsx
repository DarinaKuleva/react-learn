import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../button/component.tsx';
import { selectDishById } from '../../redux/entities/dish/selectors.ts';

import styles from './styles.module.scss';

interface Props {
  menuId: string;
}

export const Dish = ({ menuId }: Props) => {
  const [count, setCount] = useState(0);
  const menu = useSelector((state) => selectDishById(state, menuId));

  return (
    <div className={styles.dish}>
      <p className={styles.title}>{menu.name}</p>
      <Button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        isDisabled={count === 0}
      >
        -
      </Button>
      <span className={styles.counter}>{count}</span>
      <Button
        onClick={() => {
          if (count < 5) {
            setCount(count + 1);
          }
        }}
        isDisabled={count === 5}
      >
        +
      </Button>
    </div>
  );
};
