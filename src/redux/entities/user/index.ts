import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock.ts';
import { TUser } from '../../../constants/mocks-interface.ts';

type userEntities = {
  [id: string]: TUser;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: normalizedUsers.reduce((acc: userEntities, user) => {
      acc[user.id] = user;

      return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  },
  reducers: {},
});
