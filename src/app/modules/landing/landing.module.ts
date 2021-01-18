import { NgModule } from "@angular/core";

import { LandingRoutingModule } from "./Landing-routing.module";
import { LandingComponent } from "./landing.component";


@NgModule({
    declarations:[
        LandingComponent
    ],
    imports:[
        LandingRoutingModule,
    ],
})
export class LandingModule{

}