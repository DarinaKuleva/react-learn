import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from '../menu/component.tsx';
import { Reviews } from '../reviews/component.tsx';
import { ReviewForm } from '../review-form/component.tsx';
import { UserContext } from '../../contexts/user.ts';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.ts';

interface Props {
  restaurantId: string;
}

export const Restaurant = ({ restaurantId }: Props) => {
  const { user } = useContext(UserContext);
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menuIds={restaurant.menu} />
      {user?.name && user?.mail && (
        <>
          <Reviews reviewsIds={restaurant.reviews} />
          <ReviewForm key={restaurant.id} restaurantName={restaurant.name} />
        </>
      )}
    </div>
  );
};
