import { TMenu } from '../../constants/mocks-interface.ts';
import { Dish } from '../dish/component.tsx';

import styles from './styles.module.scss';

interface Props {
  menu: TMenu;
}

export const Menu = ({ menu }: Props) => {
  return (
    <div>
      <h3 className={styles.title}>Меню</h3>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}><Dish name={menuItem.name}/></li>
        ))}
      </ul>
    </div>
  );
};
