import { Action } from '@ngrx/store';
import { LoginUser, User, UserReg } from '../../Models/User';
// import { MyModel } from '../../models';

export enum ActionTypes {
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_ERROR = 'REGISTER_ERROR',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',

}

export class SigninRequestAction implements Action {
  readonly type = ActionTypes.SIGN_IN_REQUEST;
  constructor(public payload: { user: LoginUser }) {
    console.log('action called');
  }
}

export class SigninaFilureAction implements Action {
  readonly type = ActionTypes.SIGN_IN_ERROR;
  constructor(public payload: { error: string }) {}
}

export class SigninSuccessAction implements Action {
  readonly type = ActionTypes.SIGN_IN_SUCCESS;
  constructor(public payload: { user: User}) {}
}

export class RegisterRequestAction implements Action {
    readonly type = ActionTypes.REGISTER_REQUEST;
    constructor(public payload: { user: UserReg }) {}
  }

  export class REgisteraFilureAction implements Action {
    readonly type = ActionTypes.REGISTER_ERROR;
    constructor(public payload: { error: string }) {}
  }

  export class RegisterSuccessAction implements Action {
    readonly type = ActionTypes.REGISTER_SUCCESS;
    constructor(public payload: { user: User}) {}
  }

export type Actions =
        SigninRequestAction |
        SigninaFilureAction |
        SigninSuccessAction |
        RegisterRequestAction |
        REgisteraFilureAction |
        RegisterSuccessAction ;
