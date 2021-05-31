import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DASHBOARD } from "src/app/shared/constants/routes";
import { UserGuard } from "../user/shared/guards/user-guard";
import { DashboardComponent } from "./dashboard.component";


const routes: Routes = [
    {
        path: DASHBOARD,
        component: DashboardComponent,
        canActivate: [UserGuard],
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}