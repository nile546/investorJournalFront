import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";

import { Result } from "src/app/shared/models/result/result.model";
import { StockDealService } from "../shared/services/stock/stock-deal.service";
import { DashboardActions } from "./dashboard.actions";


@Injectable()
export class DashboardEffects {

    public getAllStocks = createEffect(() => this._actions.pipe(
        ofType(DashboardActions.getAllStockDeals),
        exhaustMap(action => {
            return this._stockDealService.getAll(action.tableParams).pipe(
                map((result: Result) => {
                    return DashboardActions.getAllStockDealsResult({ result });
                })
            )
        })
    ));


    constructor(
        private _actions: Actions,
        private _stockDealService: StockDealService,
    ) { }

}