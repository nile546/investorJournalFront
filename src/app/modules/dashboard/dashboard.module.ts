import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ComponentsModule } from './shared/components/components.module';
import { StocksComponent } from './stocks/stocks.component';
import { CryptosComponent } from './cryptos/cryptos.component';
import { DepositsComponent } from './deposits/deposits.component';
import { PredictComponent } from './predict/predict.component';
import { SillyDatatableModule } from 'silly-datatable';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    StocksComponent,
    CryptosComponent,
    DepositsComponent,
    PredictComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthModule,
    ComponentsModule,
    SillyDatatableModule,
  ],

})
export class DashboardModule { }
