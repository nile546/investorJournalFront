import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DASHBOARD } from "src/app/shared/constants/routes";
import { UserGuard } from "../user/shared/guards/user-guard";
import { CryptosComponent } from "./cryptos/cryptos.component";
import { DashboardComponent } from "./dashboard.component";
import { DepositsComponent } from "./deposits/deposits.component";
import { PredictComponent } from "./predict/predict.component";
import { CRYPTOS, DEPOSITS, PREDICT, STATISTICS, STOCKS } from "./shared/constants/routes";
import { StatisticsComponent } from "./statistics/statistics.component";
import { StocksComponent } from "./stocks/stocks.component";


const routes: Routes = [
    {
        path: DASHBOARD,
        component: DashboardComponent,
        canActivate: [UserGuard],
        children: [
            { path: STATISTICS, component: StatisticsComponent },
            { path: STOCKS, component: StocksComponent },
            { path: CRYPTOS, component: CryptosComponent },
            { path: DEPOSITS, component: DepositsComponent },
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