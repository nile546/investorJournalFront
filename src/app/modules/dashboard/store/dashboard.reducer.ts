import { createReducer, on } from "@ngrx/store";

import { Pagination, TableParams } from "silly-datatable";
import { Result } from "src/app/shared/models/result/result.model";
import { environment } from "src/environments/environment";
import { DashboardActions } from "./dashboard.actions";
import { DashboardSelectors } from "./dashboard.selectors";


export namespace DashboardReducer {
    export const DASHBOARD = 'dashboard';


    export interface State {
        stockDealsTableParams: TableParams;
        getAllStockDealsResult: Result | null;
        rowDetailsComponent: unknown | null;
    }


    const initialState: State = {

        stockDealsTableParams: {
            pagination: {
                pageNumber: 0,
                itemsPerPage: environment.itemsPerPageList[0]
            } as Pagination,
            source: [],
        } as TableParams,

        getAllStockDealsResult: null,
        rowDetailsComponent: null,
    }


    export const reducer = createReducer(

        initialState,

        on(DashboardActions.getAllStockDeals, (state: State, action: { tableParams: TableParams }) => {
            return {
                ...state,
                stockDealsTableParams: action.tableParams,
            }
        }),

        on(DashboardActions.getAllStockDealsResult, (state: State, action: { result: Result }) => {
            return {
                ...state,
                getAllStockDealsResult: action.result,
            }
        }),

        on(DashboardActions.rowDetails, (state: State, action: { component: unknown | null }) => {
            return {
                ...state,
                rowDetailsComponent: action.component,
            }
        }),
    )
}






