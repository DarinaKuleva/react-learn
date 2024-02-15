import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/component.tsx';
import { selectDishById } from '../../redux/entities/dish/selectors.ts';
import { cartActions, selectProductAmountById } from '../../redux/ui/cart';

import styles from './styles.module.scss';

interface Props {
  menuId: string;
}

export const Dish = ({ menuId }: Props) => {
  const menu = useSelector((state) => selectDishById(state, menuId));
  const amount = useSelector((state) => selectProductAmountById(state, menuId));
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(cartActions.increment(menuId));
  };
  const decrement = () => {
    dispatch(cartActions.decrement(menuId));
  };

  return (
    <div className={styles.dish}>
      <p className={styles.title}>{menu.name}</p>
      <Button onClick={decrement}>-</Button>
      <span className={styles.counter}>{amount}</span>
      <Button onClick={increment}>+</Button>
    </div>
  );
};
