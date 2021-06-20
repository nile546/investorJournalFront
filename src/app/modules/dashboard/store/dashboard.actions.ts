import { createAction, props } from "@ngrx/store";

import { TableParams } from "silly-datatable";
import { CryptoDeal } from "src/app/shared/models/crypto-deal/crypto-deal.model";
import { Result } from "src/app/shared/models/result/result.model";
import { StockDeal } from "src/app/shared/models/stock-deal/stock-deal.model";
import { DetailsComponents } from "../shared/components/row-details/row-details.component";


export namespace DashboardActions {
    export const getAllStockDeals = createAction(
        '[Stock Deals Table Component] Get All Stock Deals',
        props<{ tableParams: TableParams }>(),
    ),
        getAllStockDealsResult = createAction(
            '[Stock Deals Table Component] Get All Stock Deals Result',
            props<{ result: Result }>(),
        ),
        createStockDeal = createAction(
            '[Stock Deals Details Component] Create Stock Deal',
            props<{ stockDeal: StockDeal }>(),
        ),
        createStockDealResult = createAction(
            '[Stock Deals Details Component] Create Stock Deal Result',
            props<{ result: Result }>(),
        ),


        rowDetails = createAction(
            '[Table Component] Show Row Details',
            props<{ component: DetailsComponents | null, payload: unknown | null }>()
        ),

        getAllStocks = createAction('[Stock Table Component] Get All Stocks', props<{ tableParams: TableParams }>()),
        getAllStocksResult = createAction('[Stock Table Component] Get All Stocks Result', props<{ result: Result }>()),

        getAllCryptoDeals = createAction(
            '[Crypto Deals Table Component] Get All Crypto Deals',
            props<{ tableParams: TableParams }>(),
        ),
        getAllCryptoDealsResult = createAction(
            '[Crypto Deals Table Component] Get All Crypto Deals Result',
            props<{ result: Result }>(),
        ),
        createCryptoDeal = createAction(
            '[Crypto Deal Details Component] Create Crypto Deal',
            props<{ cryptoDeal: CryptoDeal }>(),
        ),

        getAllDepositDeals = createAction('[Deposit Deals Table Component] Get All Deposit Deals', props<{ tableParams: TableParams }>()),

        getAllStrategies = createAction('[Strategies Table Component] Get All Strategies', props<{ tableParams: TableParams }>()),
        getAllStrategiesResult = createAction('[Strategies Table Component] Get All Strategies Result', props<{ result: Result }>()),

        getAllPatterns = createAction('[Patterns Table Component] Get All Patterns', props<{ tableParams: TableParams }>()),
        getAllPatternsResult = createAction('[Patterns Table Component] Get All Patters Result', props<{ result: Result }>());
}