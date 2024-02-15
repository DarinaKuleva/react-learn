import { useSelector } from 'react-redux';
import { selectProductAmount } from '../../redux/ui/cart';
import { CartButton } from './component.tsx';

export const CartButtonContainer = () => {
  const amount = useSelector(selectProductAmount);
  return <CartButton amount={amount} />;
};
