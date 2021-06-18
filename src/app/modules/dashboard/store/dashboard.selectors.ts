import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardReducer } from "./dashboard.reducer";


export namespace DashboardSelectors {
    export const dashboardState = createFeatureSelector<DashboardReducer.State>(DashboardReducer.DASHBOARD),

        getAllStockDealsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllStockDealsResult),

        rowDetailsComponent = createSelector(dashboardState, (state: DashboardReducer.State) => state.rowDetailsComponent),
        rowDetailsPayload = createSelector(dashboardState, (state: DashboardReducer.State) => state.rowDetailsPayload),

        getAllStocksResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllStocksResult),

        getAllDepositDealsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllDepositDealsResult),

        getAllCryptoDealsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllCryptoDealsResult);
}