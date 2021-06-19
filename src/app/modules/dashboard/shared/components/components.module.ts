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
import { CryptoDealsTableComponent } from './crypto-deals-table/crypto-deals-table.component';
import { DepositDealsTableComponent } from './deposit-deals-table/deposit-deals-table.component';
import { CryptoDealDetailsComponent } from './crypto-deal-details/crypto-deal-details.component';
import { DepositDealDetailsComponent } from './deposit-deal-details/deposit-deal-details.component';
import { StrategyTableComponent } from './strategy-table/strategy-table.component';
import { PatternTableComponent } from './pattern-table/pattern-table.component';


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
        CryptoDealsTableComponent,
        DepositDealsTableComponent,
        CryptoDealDetailsComponent,
        DepositDealDetailsComponent,
        StrategyTableComponent,
        PatternTableComponent,
    ],
    exports: [
        AsideComponent,
        DashboardMenuComponent,
        StockDealsTableComponent,
        RowDetailsComponent,
        StockTableComponent,
        CryptoDealsTableComponent,
        DepositDealsTableComponent,
    ]
})
export class ComponentsModule {

}