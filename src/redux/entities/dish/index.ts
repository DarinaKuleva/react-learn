import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock.ts';
import { TDish } from '../../../constants/mocks-interface.ts';

type dishEntities = {
  [id: string]: TDish;
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: normalizedDishes.reduce((acc: dishEntities, dish) => {
      acc[dish.id] = dish;

      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
