import { RootState } from '../../index.ts';

export const selectReviewModule = (state: RootState) => state.review;

export const selectReviewById = (state: RootState, id: string) => selectReviewModule(state).entities[id];
