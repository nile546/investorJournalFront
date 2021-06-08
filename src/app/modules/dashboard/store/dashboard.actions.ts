import { createAction, props } from "@ngrx/store";

import { TableParams } from "silly-datatable";


export namespace DashboardActions {
    export const getStocksTableParams = createAction(
        '[Stocks Table Component] Get Table Params',
        props<{ tableParams: TableParams }>()
    );
}