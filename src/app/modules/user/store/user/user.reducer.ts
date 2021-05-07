import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/models/user/user.model";
import { UserActions } from "./user.actions";


export namespace UserReducer {

    export const CURRENT_USER = 'currentUser';


    export interface State {
        user: User | null;
    }


    const initialState: State = {
        user: null
    }


    export const reducer = createReducer(

        initialState,

        on(UserActions.signup, (state: State, action: any): State => {
            return {
                ...state,
                user: action.user
            }
        }),
    );
}
