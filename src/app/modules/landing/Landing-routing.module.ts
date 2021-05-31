import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LANDING } from "src/app/shared/constants/routes";
import { CONFIRM_SIGNUP } from "../user/shared/constants/routes";
import { ConfirmSignupComponent } from "./confirm-signup/confirm-signup.component";
import { LandingComponent } from "./landing.component";


const routes: Routes = [
    {
        path: LANDING,
        component: LandingComponent,
        children: [
            { path: CONFIRM_SIGNUP, component: ConfirmSignupComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule {

}