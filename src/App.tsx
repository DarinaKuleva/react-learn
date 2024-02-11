import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Layout } from './components/layout/component';
import { Restaurants } from './components/restaurants/component.tsx';
import { IUser, UserContext } from './contexts/user.ts';

export const App = () => {
  const [user, setUser] = useState<IUser>({ name: '', mail: '' });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Restaurants />
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};
