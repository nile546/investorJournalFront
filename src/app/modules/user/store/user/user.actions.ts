import { createAction, props } from "@ngrx/store";
import { User } from "src/app/shared/models/user/user.model";

export namespace UserActions {
    export const signup = createAction('[Registration Modal Component] Sign Up', props<{ user: User }>());

    export const signupSuccess = createAction('[Registration Modal Component] Sign Up Success');

    export const signupFailure = createAction(
        '[Registration Modal Component] Sign Up Failure',
        props<{ errorMessage: string }>()
    );
}