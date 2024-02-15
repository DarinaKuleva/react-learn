import { Button } from '../button/component.tsx';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CartContainer } from '../cart/container.tsx';

import styles from './styles.module.scss';

interface Props {
  amount: number;
}

export const CartButton = ({ amount }: Props) => {
  const [coordinates, setCoordinates] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const portalDiv = document.getElementById('popoverContainer')!;

  const toggleCartModal = () => {
    if (coordinates) {
      setCoordinates(null);
      return;
    }

    const boundingClientRect = buttonRef.current?.getBoundingClientRect();

    if (boundingClientRect) {
      setCoordinates({ left: boundingClientRect.left, top: boundingClientRect.bottom });
    }
  };

  return (
    <>
      <Button ref={buttonRef} onClick={toggleCartModal}>
        {amount}
      </Button>
      {coordinates &&
        createPortal(
          <div style={coordinates} className={styles.modal}>
            <CartContainer />
          </div>,
          portalDiv,
        )}
    </>
  );
};
