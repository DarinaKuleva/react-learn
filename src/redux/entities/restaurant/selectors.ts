import { RootState } from '../../index.ts';

export const selectRestaurantModule = (state: RootState) => state.restaurant;

export const selectRestaurantIds = (state: RootState) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state: RootState, id: string) => selectRestaurantModule(state).entities[id];
