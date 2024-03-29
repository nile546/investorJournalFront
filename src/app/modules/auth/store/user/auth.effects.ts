import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { result } from "lodash-es";
import { exhaustMap, map, switchMap } from "rxjs/operators";

import { Result } from "src/app/shared/models/result/result.model";
import { User } from "src/app/shared/models/user/user.model";
import { AuthService } from "../../shared/services/user/auth.service";
import { AuthActions } from "./auth.actions";


@Injectable()
export class AuthEffects {

    public signup = createEffect(() => {
        return this._actions.pipe(
            ofType(AuthActions.signup),
            exhaustMap(action => {
                return this._authService.signup(action.user).pipe(
                    map((result: Result) => {
                        return AuthActions.signupResult({ result });
                    })
                );
            })
        )
    })


    public confirmSignup = createEffect(() => {
        return this._actions.pipe(
            ofType(AuthActions.confirmSignup),
            exhaustMap(action => {
                return this._authService.confirmSignup(action.token).pipe(
                    map((result: Result) => {
                        return AuthActions.confirmSignupResult({ result });
                    })
                );
            })
        )
    })


    public signin = createEffect(() => {
        return this._actions.pipe(
            ofType(AuthActions.signin),
            exhaustMap(action => {
                return this._authService.signin(action.creditials).pipe(
                    switchMap((result: Result) => {
                        return [
                            AuthActions.clearCredentials(),
                            AuthActions.signinResult({ result }),
                        ];
                    })
                );
            })
        )
    })


    public signout = createEffect(() => {
        return this._actions.pipe(
            ofType(AuthActions.signout),
            exhaustMap(_ => {
                return this._authService.signout().pipe(
                    map((_: Result) => {
                        return AuthActions.clearCurrentUser();
                    })
                );
            })
        )
    })


    public getCurrentUser = createEffect(() => {
        return this._actions.pipe(
            ofType(AuthActions.getCurrentUser),
            exhaustMap(action => {
                return this._authService.getCurrentUser().pipe(
                    map((result: Result) => {
                        return AuthActions.setCurrentUser({ currentUser: result.payload as User })
                    })
                )
            })
        )
    })


    constructor(
        private _actions: Actions,
        private _authService: AuthService
    ) { }
}