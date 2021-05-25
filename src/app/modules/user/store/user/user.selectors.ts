import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserReducer } from "./user.reducer";


export namespace UserSelectors {
    export const userState = createFeatureSelector<UserReducer.State>(UserReducer.CURRENT_USER);

    export const signupResult = createSelector(userState, (state: UserReducer.State) => state.signupResult);
    export const confirmSignupResult = createSelector(userState, (state: UserReducer.State) => state.confirmSignupResult);

    export const signinResult = createSelector(userState, (state: UserReducer.State) => state.signinResult);
}