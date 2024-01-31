import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    children: ReactNode;
}

export const Button = ({onClick, isDisabled, children}: Props) => {
  return (
    <button
        onClick={onClick}
        className={classNames(
            styles.button,
            isDisabled && styles.disabled,
        )}
    >
         {children}
    </button>
  );
};
