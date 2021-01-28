import { NgModule } from "@angular/core";

import { LandingRoutingModule } from "./Landing-routing.module";
import { LandingComponent } from "./landing.component";
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from "src/app/modules/landing/shared/components/components.module";
import { ComponentsModule as RootComponentsModule } from "src/app/shared/components/components.module";
import { SectionPresintationComponent } from './section-presintation/section-presintation.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';


@NgModule({
    declarations:[
        LandingComponent,
        HeaderComponent,
        SectionPresintationComponent,
        SectionFeaturesComponent,
    ],
    imports:[
        LandingRoutingModule,
        ComponentsModule,
        RootComponentsModule,
    ],
})
export class LandingModule{

}