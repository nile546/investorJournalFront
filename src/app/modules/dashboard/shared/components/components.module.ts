import { NgModule } from "@angular/core";
import { AsideComponent } from "./aside/aside.component";
import { DashboardMenuComponent } from "./dashboard-menu/dashboard-menu.component";
import { ComponentsModule as RootComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
    imports: [
        RootComponentsModule,
    ],
    declarations: [
        AsideComponent,
        DashboardMenuComponent,
    ],
    exports: [
        AsideComponent,
        DashboardMenuComponent,
    ]
})
export class ComponentsModule {

}