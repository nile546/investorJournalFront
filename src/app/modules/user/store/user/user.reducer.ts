import { createReducer, on } from "@ngrx/store";

import { Creditials } from "src/app/shared/models/creditials/creditials.models";
import { Result } from "src/app/shared/models/result/result.model";
import { User } from "src/app/shared/models/user/user.model";
import { UserActions } from "./user.actions";


export namespace UserReducer {

    export const CURRENT_USER = 'currentUser';


    export interface State {
        user: User | null;
        creditials: Creditials | null;
        signupResult: Result | null;
        signupToken: string | null;
        confirmSignupResult: Result | null;
    }


    const initialState: State = {
        user: null,
        creditials: null,
        signupResult: null,
        signupToken: null,
        confirmSignupResult: null,
    }


    export const reducer = createReducer(

        initialState,

        on(UserActions.signupResult, (state: State, action: any): State => {
            return {
                ...state,
                signupResult: action.result,
            }
        }),

        on(UserActions.confirmSignup, (state: State, action: any): State => {
            return {
                ...state,
                signupToken: action.token,
            }
        }),

        on(UserActions.signin, (state: State, action: any): State => {
            return {
                ...state,
                creditials: action.creditials,
            }
        }),

        on(UserActions.signin, (state: State, action: any): State => {
            return {
                ...state,
                creditials: action.creditials,
            }
        }),

        on(UserActions.confirmSignupResult, (state: State, action: any): State => {
            return {
                ...state,
                confirmSignupResult: action.result,
            }
        }),
    );
}
