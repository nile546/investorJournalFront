import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DASHBOARD } from "src/app/shared/constants/routes";
import { UserGuard } from "../auth/shared/guards/user-guard";
import { CryptoDealsComponent } from "./crypto-deals/crypto-deals.component";
import { DashboardComponent } from "./dashboard.component";
import { DepositsComponent } from "./deposits/deposits.component";
import { PredictComponent } from "./predict/predict.component";
import { CRYPTO_DEALS, DEPOSIT_DEALS, PREDICT, STATISTICS, STOCK_DEALS } from "./shared/constants/routes";
import { StatisticsComponent } from "./statistics/statistics.component";
import { StockDealsComponent } from "./stock-deals/stock-deals.component";


const routes: Routes = [
    {
        path: DASHBOARD,
        component: DashboardComponent,
        canActivate: [UserGuard],
        children: [
            { path: STATISTICS, component: StatisticsComponent },
            { path: STOCK_DEALS, component: StockDealsComponent },
            { path: CRYPTO_DEALS, component: CryptoDealsComponent },
            { path: DEPOSIT_DEALS, component: DepositsComponent },
            { path: PREDICT, component: PredictComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}