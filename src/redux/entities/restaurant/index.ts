import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock.ts';
import { TRestaurant } from '../../../constants/mocks-interface.ts';

type RestaurantEntities = {
  [id: string]: TRestaurant;
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: normalizedRestaurants.reduce((acc: RestaurantEntities, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
