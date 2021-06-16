import { createAction, props } from "@ngrx/store";

import { TableParams } from "silly-datatable";
import { Result } from "src/app/shared/models/result/result.model";


export namespace DashboardActions {
    export const getAllStockDeals = createAction('[Stock Deals Table Component] Get All Stock Deals', props<{ tableParams: TableParams }>()),
        getAllStockDealsResult = createAction('[Stock Deals Table Component] Get All Stock Deals Result', props<{ result: Result }>()),

        rowDetails = createAction('[Table Component] Show Row Details', props<{ component: unknown | null }>());
}