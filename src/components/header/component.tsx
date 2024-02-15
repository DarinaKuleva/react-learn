import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../button/component.tsx';
import { LoginForm } from '../login-form/component.tsx';
import { UserContext } from '../../contexts/user.ts';
import { CartButtonContainer } from '../cart-button/container.tsx';

import styles from './styles.module.scss';

export const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const user = useContext(UserContext);

  const login = (name: string, mail: string): void => {
    user.setUser({ name, mail });
    setShowLoginForm(false);
  };

  const logout = (): void => {
    user.setUser({ name: '', mail: '' });
    setShowLoginForm(false);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Рестораны</h1>
      <CartButtonContainer />
      {!(user.user?.name && user.user?.mail) ? (
        <Button onClick={() => setShowLoginForm(true)}>Войти</Button>
      ) : (
        <div>
          <p>{user.user?.name}</p>
          <Button onClick={() => logout()}>Выйти</Button>
        </div>
      )}
      {showLoginForm &&
        createPortal(<LoginForm onClose={() => logout()} onLogin={(name, mail) => login(name, mail)} />, document.body)}
    </header>
  );
};
