import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthReducer } from "./auth.reducer";


export namespace AuthSelectors {
    export const userState = createFeatureSelector<AuthReducer.State>(AuthReducer.AUTH);

    export const signupResult = createSelector(userState, (state: AuthReducer.State) => state.signupResult);
    export const confirmSignupResult = createSelector(userState, (state: AuthReducer.State) => state.confirmSignupResult);

    export const signinResult = createSelector(userState, (state: AuthReducer.State) => state.signinResult);

    export const currentUser = createSelector(userState, (state: AuthReducer.State) => state.currentUser);
}