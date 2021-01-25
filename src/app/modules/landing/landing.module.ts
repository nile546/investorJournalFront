import { NgModule } from "@angular/core";

import { LandingRoutingModule } from "./Landing-routing.module";
import { LandingComponent } from "./landing.component";
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from "src/app/shared/components/components.module";
import { MainMenuComponent } from "./shared/components/main-menu/main-menu.component";


@NgModule({
    declarations:[
        LandingComponent,
        HeaderComponent,
        MainMenuComponent
    ],
    imports:[
        LandingRoutingModule,
        ComponentsModule,
    ],
})
export class LandingModule{

}