import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Tab } from '../tab/component.tsx';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors.ts';
import { Restaurant } from '../restaurant/component.tsx';
import { ReviewForm } from '../review-form/component.tsx';

import styles from './styles.module.scss';

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurantIds[0]);

  return (
    <div className={styles.root}>
      {restaurantIds.map((restaurantId: string) => (
        <Tab
          key={restaurantId}
          isActive={currentRestaurantId === restaurantId}
          restaurantId={restaurantId}
          onClick={() => setCurrentRestaurantId(restaurantId)}
        />
      ))}
      <Restaurant restaurantId={currentRestaurantId} />
      <ReviewForm key={currentRestaurantId} restaurantId={currentRestaurantId} />
    </div>
  );
};
