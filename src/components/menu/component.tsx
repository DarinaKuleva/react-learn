import { TMenu } from '../../constants/mocks-interface.ts';

import styles from './styles.module.scss';

interface Props {
  menu: TMenu;
}

export const Menu = ({ menu }: Props) => {
  return (
    <>
      <h3 className={styles.title}>Меню</h3>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
    </>
  );
};
