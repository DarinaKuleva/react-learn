import { useState } from 'react';
import { Restaurant } from '../restaurant/component.tsx';
import { restaurants } from '../../constants/mocks.ts';
import { IRestaurant } from '../../constants/mocks-interface.ts';
import { Tab } from '../tab/component.tsx';

import styles from './styles.module.scss';

export const Restaurants = () => {
    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

    return (
        <div className={styles.root}>
            {restaurants.map((restaurant: IRestaurant) => (
                <Tab
                    key={restaurant.id}
                    isActive={activeRestaurant.id === restaurant.id}
                    title={restaurant.name}
                    onClick={() => setActiveRestaurant(restaurant)}
                />
            ))}
            <Restaurant restaurant={activeRestaurant}/>
        </div>
    );
};
