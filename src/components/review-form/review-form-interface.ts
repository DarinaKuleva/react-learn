export enum EActionType {
  SET_NAME = 'setName',
  SET_TEXT = 'setText',
  SET_RATING = 'setRating'
}

export interface IState {
  name: string;
  text: string;
  rating: number;
}

export interface IAction {
  type: EActionType;
  payload: string;
}
