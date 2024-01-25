import { ReactNode } from 'react';
import { Footer } from '../footer/component';
import { Header } from '../header/component';

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};
