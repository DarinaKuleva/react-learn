import { useState } from 'react';
import { Button } from '../button/component.tsx';

import styles from './styles.module.scss';

interface Props {
    name: string;
}

export const Dish = ({ name }: Props) => {
    const [count, setCount] = useState(0);

    return (
    <div className={styles.dish}>
        <p className={styles.title}>{name}</p>
        <Button
            onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                }
            }}
            isDisabled={count === 0}
        >
            -
        </Button>
        <span className={styles.counter}>{count}</span>
        <Button
            onClick={() => {
                if (count < 5) {
                    setCount(count + 1);
                }
            }}
            isDisabled={count === 5}
        >
            +
        </Button>
    </div>
  );
};
