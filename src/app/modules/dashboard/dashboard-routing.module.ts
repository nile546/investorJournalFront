import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DASHBOARD } from "src/app/shared/constants/routes";
import { UserGuard } from "../user/shared/guards/user-guard";
import { DashboardComponent } from "./dashboard.component";
import { STATISTICS } from "./shared/constants/routes";
import { StatisticsComponent } from "./statistics/statistics.component";


const routes: Routes = [
    {
        path: DASHBOARD,
        component: DashboardComponent,
        canActivate: [UserGuard],
        children: [
            { path: STATISTICS, component: StatisticsComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}