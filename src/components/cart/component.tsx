import { Dish } from '../dish/component.tsx';

interface Props {
  productIds: Array<string>;
}

export const Cart = ({ productIds }: Props) => {
  return (
    <div>
      {productIds?.length ? productIds.map((productId) => <Dish key={productId} menuId={productId} />) : 'Empty'}
    </div>
  );
};
