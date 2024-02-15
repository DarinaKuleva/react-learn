import React, { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  children: ReactNode;
}

export const Button = forwardRef(({ onClick, isDisabled, children }: Props, ref) => {
  return (
    <button ref={ref} onClick={onClick} className={classNames(styles.button, isDisabled && styles.disabled)}>
      {children}
    </button>
  );
});
