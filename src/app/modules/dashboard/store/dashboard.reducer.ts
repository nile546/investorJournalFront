import { createReducer, on, State } from "@ngrx/store";
import { Pagination, TableParams } from "silly-datatable";

import { environment } from "src/environments/environment";
import { DashboardActions } from "./dashboard.actions";


export namespace DashboardReducer {
    export const DASHBOARD = 'dashboard';

    export interface State {
        stocksTableParams: TableParams;
    }

    const initialState: State = {
        stocksTableParams: {
            pagination: {
                pageNumber: 0,
                itemsPerPage: environment.itemsPerPageList[0]
            } as Pagination,
            source: [],
        } as TableParams
    }

    export const reducer = createReducer(

        initialState,

        on(DashboardActions.getStocksTableParams, (state: State, action: { tableParams: TableParams }) => {
            return {
                ...state,
                stocksTableParams: action.tableParams
            }
        })
    )
}






