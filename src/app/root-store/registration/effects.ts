import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as featureActions from './action';
import { AuthService } from '../../services/authorization/auth.service';
import { User } from '../../Models/User';

@Injectable()
export class RegistrationStoreEffects {
    constructor(private dataService: AuthService, private actions$: Actions) { }

    @Effect()
    loginRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.SigninRequestAction>(
            featureActions.ActionTypes.SIGN_IN_REQUEST
        ),
        switchMap(action => {
            console.log('action', action);

            return this.dataService
                .signInUser(action.payload.user)
                .pipe(
                    map(
                        user => {
                            const u = user as User;
                            return new featureActions.SigninSuccessAction({
                                user: u
                            });
                        }
                    ),
                    catchError(error =>
                        observableOf(new featureActions.SigninaFilureAction({ error }))
                    )
                );
        }
        )
    );
    @Effect()
    registerRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.RegisterRequestAction>(
            featureActions.ActionTypes.REGISTER_REQUEST
        ),
        switchMap(action => {
            console.log('action', action);

            return this.dataService
                .register(action.payload.user)
                .pipe(
                    map(
                        user => {
                            const u = user as User;
                            return new featureActions.RegisterSuccessAction({
                                user: u
                            });
                        }
                    ),
                    catchError(error =>
                        observableOf(new featureActions.REgisteraFilureAction({ error }))
                    )
                );
        }
        )
    );
}
