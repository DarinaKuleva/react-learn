import { Layout } from './components/layout/component';
import { Restaurant } from './components/restaurant/component.tsx';
import { restaurants } from './constants/mocks';

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </Layout>
  );
};
