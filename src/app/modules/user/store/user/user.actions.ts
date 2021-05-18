import { createAction, props } from "@ngrx/store";

import { Creditials } from "src/app/shared/models/creditials/creditials.models";
import { Result } from "src/app/shared/models/result/result.model";
import { User } from "src/app/shared/models/user/user.model";


export namespace UserActions {
    export const signup = createAction('[Signup Modal Component] Sign Up', props<{ user: User }>());
    export const signupResult = createAction('[Signup Modal Component] Sign Up Result', props<{ result: Result }>());

    export const signin = createAction('[Singin Modal Component] Sign In', props<{ creditials: Creditials }>());
    export const signinSuccess = createAction('[Signin Modal Component] Sign In Success');
    export const signinFailure = createAction(
        '[Signin Modal Component] Sign In Failure',
        props<{ errorMessage: string }>()
    );
}
