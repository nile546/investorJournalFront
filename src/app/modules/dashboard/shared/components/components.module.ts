import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AsideComponent } from "./aside/aside.component";
import { DashboardMenuComponent } from "./dashboard-menu/dashboard-menu.component";
import { ComponentsModule as RootComponentsModule } from 'src/app/shared/components/components.module';
import { StocksTableComponent } from './stocks-table/stocks-table.component';
import { SillyDatatableModule } from "silly-datatable";


@NgModule({
    imports: [
        RootComponentsModule,
        RouterModule,
        SillyDatatableModule,
    ],
    declarations: [
        AsideComponent,
        DashboardMenuComponent,
        StocksTableComponent,
    ],
    exports: [
        AsideComponent,
        DashboardMenuComponent,
        StocksTableComponent,
    ]
})
export class ComponentsModule {

}