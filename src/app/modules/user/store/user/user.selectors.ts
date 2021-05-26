import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserReducer } from "./user.reducer";


export namespace UserSelectors {
    export const userState = createFeatureSelector<UserReducer.State>(UserReducer.USER);

    export const signupResult = createSelector(userState, (state: UserReducer.State) => state.signupResult);
    export const confirmSignupResult = createSelector(userState, (state: UserReducer.State) => state.confirmSignupResult);

    export const signinResult = createSelector(userState, (state: UserReducer.State) => state.signinResult);

    export const currentUser = createSelector(userState, (state: UserReducer.State) => state.currentUser);
}