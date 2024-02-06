import { FC, useContext, useReducer } from 'react';
import { EActionType, IAction, IState } from './review-form-interface.ts';
import { UserContext } from '../../contexts/user.ts';

import styles from './styles.module.scss';

interface Props {
  restaurantName: string;
}

const INITIAL_VALUE: IState = {
  text: '',
  rating: 1,
};

const reducer = (state: IState, action: IAction): IState => {
  const { type, payload } = action;

  switch (type) {
    case EActionType.SET_TEXT:
      return {
        ...state,
        text: payload,
      };
    case EActionType.SET_RATING:
      return {
        ...state,
        rating: Number(payload),
      };

    default:
      return state;
  }
};

export const ReviewForm: FC<Props> = ({ restaurantName }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>Форма обратной связи по ресторану {restaurantName}</h3>
      <form className={styles.form}>
        <div className={styles.field}>{user?.name}</div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="text">
            Text
          </label>
          <input
            id="text"
            type="text"
            value={form.text}
            onChange={(event) => {
              dispatch({
                type: EActionType.SET_TEXT,
                payload: event.target.value,
              });
            }}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="rating">
            Rating
          </label>
          <input
            id="rating"
            type="number"
            min="0"
            max="10"
            value={form.rating}
            onChange={(event) => {
              dispatch({
                type: EActionType.SET_RATING,
                payload: event.target.value,
              });
            }}
          />
        </div>
      </form>
    </div>
  );
};
