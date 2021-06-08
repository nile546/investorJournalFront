import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardReducer } from "./dashboard.reducer";


export namespace DashboardSelectors {
    export const dashboardState = createFeatureSelector<DashboardReducer.State>(DashboardReducer.DASHBOARD),

        stockDealsTableParams = createSelector(dashboardState, (state: DashboardReducer.State) => state.stockDealsTableParams),
        getAllStockDealsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllStockDealsResult);
}