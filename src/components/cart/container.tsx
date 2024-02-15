import { useSelector } from 'react-redux';
import { selectCartProductIds } from '../../redux/ui/cart';
import { Cart } from './component.tsx';

export const CartContainer = () => {
  const cartProductIds = useSelector(selectCartProductIds);

  return <Cart productIds={cartProductIds} />;
};
