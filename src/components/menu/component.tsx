import { Dish } from '../dish/component.tsx';

import styles from './styles.module.scss';

interface Props {
  menuIds: Array<string>;
}

export const Menu = ({ menuIds }: Props) => {
  return (
    <div>
      <h3 className={styles.title}>Меню</h3>
      <ul>
        {menuIds.map((menuId) => (
          <li key={menuId}>
            <Dish menuId={menuId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
