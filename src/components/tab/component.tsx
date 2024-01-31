import classNames from 'classnames';

interface Props {
    isActive: boolean;
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

import styles from './styles.module.scss';

export const Tab = ({ isActive, title, onClick }: Props) => {
  return (
    <button
        onClick={onClick}
        className={classNames(
            styles.tab,
            isActive && styles.active,
        )}
    >
        {title}
    </button>
  );
};
