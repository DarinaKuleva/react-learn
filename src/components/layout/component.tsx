import { ReactNode } from 'react';
import { Footer } from '../footer/component';
import { Header } from '../header/component';

import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <>{children}</>
      <Footer />
      <div id="popoverContainer" className={styles.popoverContainer} />
    </div>
  );
};
