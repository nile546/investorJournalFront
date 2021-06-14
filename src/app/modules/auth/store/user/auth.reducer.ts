import { createReducer, on } from "@ngrx/store";

import { Creditials } from "src/app/shared/models/creditials/creditials.models";
import { Result } from "src/app/shared/models/result/result.model";
import { User } from "src/app/shared/models/user/user.model";
import { AuthActions } from "./auth.actions";


export namespace AuthReducer {

    export const AUTH = 'auth';


    export interface State {
        user: User | null;
        currentUser: User | null;
        creditials: Creditials | null;
        signupResult: Result | null;
        signupToken: string | null;
        confirmSignupResult: Result | null;

        signinResult: Result | null;
    }


    const initialState: State = {
        user: null,
        currentUser: null,
        creditials: null,
        signupResult: null,
        signupToken: null,
        confirmSignupResult: null,

        signinResult: null,
    }


    export const reducer = createReducer(

        initialState,

        on(AuthActions.signupResult, (state: State, action: any): State => {
            return {
                ...state,
                signupResult: action.result,
            }
        }),

        on(AuthActions.confirmSignup, (state: State, action: any): State => {
            return {
                ...state,
                signupToken: action.token,
            }
        }),

        on(AuthActions.signin, (state: State, action: any): State => {
            return {
                ...state,
                creditials: action.creditials,
            }
        }),

        on(AuthActions.signin, (state: State, action: any): State => {
            return {
                ...state,
                creditials: action.creditials,
            }
        }),

        on(AuthActions.confirmSignupResult, (state: State, action: any): State => {
            return {
                ...state,
                confirmSignupResult: action.result,
            }
        }),

        on(AuthActions.signinResult, (state: State, action: any): State => {
            return {
                ...state,
                signinResult: action.result,
            }
        }),

        on(AuthActions.setCurrentUser, (state: State, action: any): State => {
            return {
                ...state,
                currentUser: action.currentUser,
            }
        }),

        on(AuthActions.clearCredentials, (state: State): State => {
            return {
                ...state,
                creditials: null,
            }
        }),

        on(AuthActions.clearCurrentUser, (state: State): State => {
            return {
                ...state,
                currentUser: null,
            }
        })
    );
}
