import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.ts';

interface Props {
  isActive: boolean;
  restaurantId: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

import styles from './styles.module.scss';

export const Tab = ({ isActive, restaurantId, onClick }: Props) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <button onClick={onClick} className={classNames(styles.tab, isActive && styles.active)}>
      {restaurant.name}
    </button>
  );
};
