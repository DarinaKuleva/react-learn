import { RootState } from '../../index.ts';

export const selectDishModule = (state: RootState) => state.dish;

export const selectDishById = (state: RootState, id: string) => selectDishModule(state).entities[id];
