import { createAction, props } from "@ngrx/store";
import { User } from "src/app/shared/models/user/user.model";

export namespace UserActions {
    export const createUser = createAction('[Registration Modal Component] Create User', props<{ user: User }>());
}