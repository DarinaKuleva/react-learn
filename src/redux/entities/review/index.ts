import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock.ts';
import { TReview } from '../../../constants/mocks-interface.ts';

type reviewEntities = {
  [id: string]: TReview;
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: normalizedReviews.reduce((acc: reviewEntities, review) => {
      acc[review.id] = review;

      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
