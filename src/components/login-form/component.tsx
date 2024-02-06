import { useReducer } from 'react';
import { EActionType, IAction, IState } from './login-form-interface.ts';

import styles from './styles.module.scss';

interface Props {
  onClose: () => {};
  onLogin: (name: string, mail: string) => {};
}

const INITIAL_VALUE: IState = {
  name: '',
  mail: '',
};

const reducer = (state: IState, action: IAction): IState => {
  const { type, payload } = action;

  switch (type) {
    case EActionType.SET_NAME:
      return {
        ...INITIAL_VALUE,
        name: payload,
      };
    case EActionType.SET_MAIL:
      return {
        ...state,
        mail: payload,
      };

    default:
      return state;
  }
};

export const LoginForm = ({ onClose, onLogin }: Props) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Имя
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(event) => {
              dispatch({
                type: EActionType.SET_NAME,
                payload: event.target.value,
              });
            }}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="text">
            Почта
          </label>
          <input
            id="text"
            type="email"
            value={form.mail}
            onChange={(event) => {
              dispatch({
                type: EActionType.SET_MAIL,
                payload: event.target.value,
              });
            }}
          />
        </div>
      </form>
      <button onClick={() => onLogin(form.name, form.mail)}>Войти</button>
      <button onClick={onClose}>Отмена</button>
    </div>
  );
};
