import { createReducer, on } from "@ngrx/store";

import { Result } from "src/app/shared/models/result/result.model";
import { DetailsComponents } from "../shared/components/row-details/row-details.component";
import { DashboardActions } from "./dashboard.actions";


export namespace DashboardReducer {
    export const DASHBOARD = 'dashboard';


    export interface State {

        getAllStockDealsResult: Result | null;
        getAllDepositDealsResult: Result | null;
        getAllCryptoDealsResult: Result | null;
        getAllStrategiesResult: Result | null;
        getAllPatternsResult: Result | null;
        getAllCryptosResult: Result | null;
        getAllStocksResult: Result | null;
        getCurrencyRatesResult: Result | null;
        getAllBanksResult: Result | null;
        loadBrokerDataResult: Result | null;

        createStockDealResult: Result | null;
        createCryptoDealResult: Result | null;
        createDepositDealResult: Result | null;

        rowDetailsComponent: DetailsComponents | null;
        rowDetailsPayload: unknown | null;
    }


    const initialState: State = {

        getAllStockDealsResult: null,
        getAllDepositDealsResult: null,
        getAllCryptoDealsResult: null,
        getAllStrategiesResult: null,
        getAllPatternsResult: null,
        getAllCryptosResult: null,
        getAllStocksResult: null,
        getCurrencyRatesResult: null,
        getAllBanksResult: null,
        loadBrokerDataResult: null,

        createStockDealResult: null,
        createCryptoDealResult: null,
        createDepositDealResult: null,

        rowDetailsComponent: null,
        rowDetailsPayload: null,
    }


    export const reducer = createReducer(

        initialState,

        // on(DashboardActions.getAllStockDeals, (state: State, action: { tableParams: TableParams }) => {
        //     return {
        //         ...state,
        //         stockDealsTableParams: action.tableParams,
        //     }
        // }),

        on(DashboardActions.getAllStockDealsResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllStockDealsResult: action.result,
            }
        }),

        on(DashboardActions.getAllCryptoDealsResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllCryptoDealsResult: action.result,
            }
        }),

        on(DashboardActions.getAllDepositDealsResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllDepositDealsResult: action.result,
            }
        }),

        on(DashboardActions.getCurrencyRatesResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getCurrencyRatesResult: action.result,
            }
        }),


        on(DashboardActions.createStockDealResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                createStockDealResult: action.result,
            }
        }),

        on(DashboardActions.createCryptoDealResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                createCryptoDealResult: action.result,
            }
        }),

        on(DashboardActions.createDepositDealResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                createDepositDealResult: action.result,
            }
        }),


        on(DashboardActions.clearCreateResults, (state: State): State => {
            return {
                ...state,
                createStockDealResult: null,
                createCryptoDealResult: null,
                createDepositDealResult: null,
            }
        }),



        on(DashboardActions.rowDetails, (state: State, action: { component: DetailsComponents | null, payload: unknown | null }): State => {
            return {
                ...state,
                rowDetailsComponent: action.component,
                rowDetailsPayload: action.payload,
            }
        }),

        // on(DashboardActions.getAllStocks, (state: State, action: { tableParams: TableParams }) => {
        //     return {
        //         ...state,
        //         stocksTableParams: action.tableParams,
        //     }
        // }),

        on(DashboardActions.getAllStocksResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllStocksResult: action.result,
            }
        }),

        on(DashboardActions.getAllStrategiesResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllStrategiesResult: action.result,
            }
        }),

        on(DashboardActions.getAllPatternsResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllPatternsResult: action.result,
            }
        }),

        on(DashboardActions.getAllCryptosResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllCryptosResult: action.result,
            }
        }),

        on(DashboardActions.getAllBanksResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                getAllBanksResult: action.result,
            }
        }),

        on(DashboardActions.loadBrokerDataResult, (state: State, action: { result: Result }): State => {
            return {
                ...state,
                loadBrokerDataResult: action.result,
            }
        }),
    )
}






