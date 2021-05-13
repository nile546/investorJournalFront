import { createReducer, on } from "@ngrx/store";
import { Creditials } from "src/app/shared/models/creditials/creditials.models";
import { User } from "src/app/shared/models/user/user.model";
import { UserActions } from "./user.actions";


export namespace UserReducer {

    export const CURRENT_USER = 'currentUser';


    export interface State {
        user: User | null;
        creditials: Creditials | null;
    }


    const initialState: State = {
        user: null,
        creditials: null,
    }


    export const reducer = createReducer(

        initialState,

        on(UserActions.signup, (state: State, action: any): State => {
            return {
                ...state,
                user: action.user
            }
        }),

        on(UserActions.signin, (state: State, action: any): State => {
            return {
                ...state,
                creditials: action.creditials
            }
        }),
    );
}
