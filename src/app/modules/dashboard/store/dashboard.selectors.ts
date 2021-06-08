import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardReducer } from "./dashboard.reducer";


export namespace DashboardSelectors {
    export const dashboardState = createFeatureSelector<DashboardReducer.State>(DashboardReducer.DASHBOARD);

    export const stocksTableParams = createSelector(dashboardState, (state: DashboardReducer.State) => state.stocksTableParams);
}