export enum EActionType {
  SET_TEXT = 'setText',
  SET_RATING = 'setRating',
}

export interface IState {
  text: string;
  rating: number;
}

export interface IAction {
  type: EActionType;
  payload: string;
}
