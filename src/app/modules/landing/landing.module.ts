import { NgModule } from "@angular/core";

import { LandingRoutingModule } from "./Landing-routing.module";
import { LandingComponent } from "./landing.component";
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from "src/app/modules/landing/shared/components/components.module";
import { ComponentsModule as RootComponentsModule } from "src/app/shared/components/components.module";
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { SectionInterfaceComponent } from './section-interface/section-interface.component';
import { SectionSliderComponent } from './section-slider/section-slider.component';
import { Slide1Component } from './section-slider/slide1/slide1.component';
import { Slide2Component } from './section-slider/slide2/slide2.component';
import { Slide3Component } from './section-slider/slide3/slide3.component';
import { ConfirmSignupComponent } from './confirm-signup/confirm-signup.component';


@NgModule({
    declarations:[
        LandingComponent,
        HeaderComponent,
        SectionFeaturesComponent,
        SectionInterfaceComponent,
        SectionSliderComponent,
        Slide1Component,
        Slide2Component,
        Slide3Component,
        ConfirmSignupComponent,
    ],
    imports:[
        LandingRoutingModule,
        ComponentsModule,
        RootComponentsModule,
    ],
})
export class LandingModule{

}