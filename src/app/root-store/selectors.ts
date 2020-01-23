import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  RegStoreSelectors
} from './registration';


export const selectError: MemoizedSelector<object, string> = createSelector(
  RegStoreSelectors.selectRegstrationError,
  (registrationError: string) => {
    return  registrationError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
    RegStoreSelectors.selectRegIsLoading,
  (isLoading: boolean) => {
    return isLoading;
  }
);
