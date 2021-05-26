import { createAction, props } from "@ngrx/store";

import { Creditials } from "src/app/shared/models/creditials/creditials.models";
import { Result } from "src/app/shared/models/result/result.model";
import { User } from "src/app/shared/models/user/user.model";


export namespace UserActions {
    export const signup = createAction('[Signup Modal Component] Sign Up', props<{ user: User }>());
    export const signupResult = createAction('[Signup Modal Component] Sign Up Result', props<{ result: Result }>());
    export const confirmSignup = createAction('[Confirm Signup Component] Comfirm Signup', props<{ token: string }>());
    export const confirmSignupResult = createAction('[Confirm Signup Modal Component] Confirm Sign Up Result', props<{ result: Result }>());

    export const signin = createAction('[Singin Modal Component] Sign In', props<{ creditials: Creditials }>());
    export const signinResult = createAction('[Signin Modal Component] Sign In Result', props<{ result: Result }>());
}
