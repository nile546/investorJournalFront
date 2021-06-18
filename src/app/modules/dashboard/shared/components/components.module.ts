import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AsideComponent } from "./aside/aside.component";
import { DashboardMenuComponent } from "./dashboard-menu/dashboard-menu.component";
import { ComponentsModule as RootComponentsModule } from 'src/app/shared/components/components.module';
import { SillyDatatableModule } from "silly-datatable";
import { StockDealsTableComponent } from "./stock-deals-table/stock-deals-table.component";
import { RowDetailsComponent } from './row-details/row-details.component';
import { StockDealDetailsComponent } from './stock-deal-details/stock-deal-details.component';
import { StockTableComponent } from './stock-table/stock-table.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        RootComponentsModule,
        RouterModule,
        SillyDatatableModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AsideComponent,
        DashboardMenuComponent,
        StockDealsTableComponent,
        RowDetailsComponent,
        StockDealDetailsComponent,
        StockTableComponent,
    ],
    exports: [
        AsideComponent,
        DashboardMenuComponent,
        StockDealsTableComponent,
        RowDetailsComponent,
        StockTableComponent,
    ]
})
export class ComponentsModule {

}