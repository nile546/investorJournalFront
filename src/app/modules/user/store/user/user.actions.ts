import { createAction, props } from "@ngrx/store";
import { Creditials } from "src/app/shared/models/creditials/creditials.models";
import { User } from "src/app/shared/models/user/user.model";

export namespace UserActions {
    export const signup = createAction('[Signup Modal Component] Sign Up', props<{ user: User }>());
    export const signupSuccess = createAction('[Signup Modal Component] Sign Up Success');
    export const signupFailure = createAction(
        '[Singup Modal Component] Sign Up Failure',
        props<{ errorMessage: string }>()
    );

    export const signin = createAction('[Singin Modal Component] Sign In', props<{ creditials: Creditials }>());
    export const signinSuccess = createAction('[Signin Modal Component] Sign In Success');
    export const signinFailure = createAction(
        '[Signin Modal Component] Sign In Failure',
        props<{ errorMessage: string }>()
    );
}
