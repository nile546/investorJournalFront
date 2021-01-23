import { NgModule } from "@angular/core";

import { LandingRoutingModule } from "./Landing-routing.module";
import { LandingComponent } from "./landing.component";
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations:[
        LandingComponent,
        HeaderComponent
    ],
    imports:[
        LandingRoutingModule,
    ],
})
export class LandingModule{

}