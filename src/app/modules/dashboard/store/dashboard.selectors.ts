import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardReducer } from "./dashboard.reducer";


export namespace DashboardSelectors {
    export const dashboardState = createFeatureSelector<DashboardReducer.State>(DashboardReducer.DASHBOARD),

        getAllStockDealsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllStockDealsResult),

        rowDetailsComponent = createSelector(dashboardState, (state: DashboardReducer.State) => state.rowDetailsComponent),
        rowDetailsPayload = createSelector(dashboardState, (state: DashboardReducer.State) => state.rowDetailsPayload),

        getAllStocksResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllStocksResult),

        getAllDepositDealsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllDepositDealsResult),

        getAllCryptoDealsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllCryptoDealsResult),

        getAllStrategiesResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllStrategiesResult),

        getAllPatternsResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllPatternsResult),

        getAllCryptosResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllCryptosResult),

        getCurrencyRatesResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getCurrencyRatesResult),

        getAllBanksResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.getAllBanksResult),

        createStockDealResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.createStockDealResult),
        createCryptoDealResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.createCryptoDealResult),
        createDepositDealResult = createSelector(dashboardState, (state: DashboardReducer.State) => state.createDepositDealResult);
}