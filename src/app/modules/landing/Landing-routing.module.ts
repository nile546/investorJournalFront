import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConfirmSignupComponent } from "./confirm-signup/confirm-signup.component";
import { LandingComponent } from "./landing.component";


const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent,
        children: [
            { path: 'confirm-signup', component: ConfirmSignupComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule {

}