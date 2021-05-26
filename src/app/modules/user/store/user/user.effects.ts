import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { COMMON_ERROR_MESSAGE } from "src/app/shared/constants/errors";

import { Result, ResultStatuses } from "src/app/shared/models/result/result.model";
import { UserService } from "../../shared/services/user/user.service";
import { UserActions } from "./user.actions";


@Injectable()
export class UserEffects {

    public signup = createEffect(() => {
        return this._actions.pipe(
            ofType(UserActions.signup),
            exhaustMap(action => {
                return this._userService.signup(action.user).pipe(
                    map((result: Result) => {
                        return UserActions.signupResult({ result });
                    })
                );
            })
        )
    })


    public confirmSignup = createEffect(() => {
        return this._actions.pipe(
            ofType(UserActions.confirmSignup),
            exhaustMap(action => {
                return this._userService.confirmSignup(action.token).pipe(
                    map((result: Result) => {
                        return UserActions.confirmSignupResult({ result });
                    })
                );
            })
        )
    })


    public signin = createEffect(() => {
        return this._actions.pipe(
            ofType(UserActions.signin),
            exhaustMap(action => {
                return this._userService.signin(action.creditials).pipe(
                    map((result: Result) => {
                        return UserActions.signinResult({ result });
                    })
                );
            })
        )
    })


    constructor(
        private _actions: Actions,
        private _userService: UserService
    ) { }
}