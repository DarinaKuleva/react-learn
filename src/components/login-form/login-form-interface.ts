export enum EActionType {
  SET_NAME = 'setName',
  SET_MAIL = 'setMail',
}

export interface IState {
  name: string;
  mail: string;
}

export interface IAction {
  type: EActionType;
  payload: string;
}
