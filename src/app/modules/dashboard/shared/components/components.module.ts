import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AsideComponent } from "./aside/aside.component";
import { DashboardMenuComponent } from "./dashboard-menu/dashboard-menu.component";
import { ComponentsModule as RootComponentsModule } from 'src/app/shared/components/components.module';
import { SillyDatatableModule } from "silly-datatable";
import { StockDealsTableComponent } from "./stock-deals-table/stock-deals-table.component";
import { RowDetailsComponent } from './row-details/row-details.component';


@NgModule({
    imports: [
        RootComponentsModule,
        RouterModule,
        SillyDatatableModule,
    ],
    declarations: [
        AsideComponent,
        DashboardMenuComponent,
        StockDealsTableComponent,
        RowDetailsComponent,
    ],
    exports: [
        AsideComponent,
        DashboardMenuComponent,
        StockDealsTableComponent,
    ]
})
export class ComponentsModule {

}