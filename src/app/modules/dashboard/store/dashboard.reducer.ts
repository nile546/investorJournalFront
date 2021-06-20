import { createReducer, on } from "@ngrx/store";

import { TableParams } from "silly-datatable";
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
    )
}






