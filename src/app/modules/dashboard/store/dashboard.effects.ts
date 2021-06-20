import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";

import { Result } from "src/app/shared/models/result/result.model";
import { CryptoDealService } from "../shared/services/crypto-deal/crypto-deal.service";
import { PatternService } from "../shared/services/pattern/pattern.service";
import { StockDealService } from "../shared/services/stock-deal/stock-deal.service";
import { StockService } from "../shared/services/stock/stock.service";
import { StrategyService } from "../shared/services/strategy/strategy.service";
import { DashboardActions } from "./dashboard.actions";


@Injectable()
export class DashboardEffects {

    public getAllStockDeals = createEffect(() => this._actions.pipe(
        ofType(DashboardActions.getAllStockDeals),
        exhaustMap(action => {
            return this._stockDealService.getAll(action.tableParams).pipe(
                map((result: Result) => {
                    return DashboardActions.getAllStockDealsResult({ result });
                })
            )
        })
    ));


    public createStockDeal = createEffect(() => this._actions.pipe(
        ofType(DashboardActions.createStockDeal),
        exhaustMap(action => {
            return this._stockDealService.create(action.stockDeal).pipe(
                map((result: Result) => {
                    return DashboardActions.createStockDealResult({ result });
                })
            )
        })
    ));


    public getAllStocks = createEffect(() => this._actions.pipe(
        ofType(DashboardActions.getAllStocks),
        exhaustMap(action => {
            return this._stockService.getAll(action.tableParams).pipe(
                map((result: Result) => {
                    return DashboardActions.getAllStocksResult({ result });
                })
            )
        })
    ));


    public getAllStrategies = createEffect(() => this._actions.pipe(
        ofType(DashboardActions.getAllStrategies),
        exhaustMap(action => {
            return this._strategyService.getAll(action.tableParams).pipe(
                map((result: Result) => {
                    return DashboardActions.getAllStrategiesResult({ result });
                })
            )
        })
    ));


    public getAllPatterns = createEffect(() => this._actions.pipe(
        ofType(DashboardActions.getAllPatterns),
        exhaustMap(action => {
            return this._patternService.getAll(action.tableParams).pipe(
                map((result: Result) => {
                    return DashboardActions.getAllPatternsResult({ result });
                })
            )
        })
    ));


    public getAllCryptoDeals = createEffect(() => this._actions.pipe(
        ofType(DashboardActions.getAllCryptoDeals),
        exhaustMap(action => {
            return this._cryptoDealService.getAll(action.tableParams).pipe(
                map((result: Result) => {
                    return DashboardActions.getAllCryptoDealsResult({ result });
                })
            )
        })
    ));


    constructor(
        private _actions: Actions,
        private _stockDealService: StockDealService,
        private _stockService: StockService,
        private _strategyService: StrategyService,
        private _patternService: PatternService,
        private _cryptoDealService: CryptoDealService,
    ) { }

}