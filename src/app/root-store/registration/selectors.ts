import { createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import { RegistrationState} from './state';
import { User } from '../../Models/User';


export const getError = (state: RegistrationState): boolean => state.isError;

export const getIsLoading = (state: RegistrationState): boolean => state.isLoading;

export const getUser = (state: RegistrationState): User => state.user;

export const selectRegState: MemoizedSelector<
  object,
  RegistrationState
> = createFeatureSelector<RegistrationState>('registration');


export const selectRegstrationError: MemoizedSelector<object, boolean> = createSelector(
    selectRegState,
    getError
  );

export const selectRegIsLoading: MemoizedSelector<
object,
boolean
> = createSelector(selectRegState, getIsLoading);

export const selectRegUser: MemoizedSelector<
object,
User
> = createSelector(selectRegState, getUser);



