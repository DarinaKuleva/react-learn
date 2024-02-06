import { useContext } from 'react';
import { Menu } from '../menu/component.tsx';
import { Reviews } from '../reviews/component.tsx';
import { ReviewForm } from '../review-form/component.tsx';
import { IRestaurant } from '../../constants/mocks-interface.ts';
import { UserContext } from '../../contexts/user.ts';

interface Props {
  restaurant: IRestaurant;
}

export const Restaurant = ({ restaurant }: Props) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      {user?.name && user?.mail && <ReviewForm key={restaurant.id} restaurantName={restaurant.name} />}
    </div>
  );
};
