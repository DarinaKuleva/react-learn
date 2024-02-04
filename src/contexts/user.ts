import React from 'react';

export interface IUser {
  name: string;
  mail: string;
}

interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const UserContext = React.createContext<IUserContext>({
  user: {
    name: '',
    mail: '',
  },
  setUser: () => {},
});
