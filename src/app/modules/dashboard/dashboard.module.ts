import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserModule } from '../user/user.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ComponentsModule } from './shared/components/components.module';
import { StocksComponent } from './stocks/stocks.component';
import { CryptosComponent } from './cryptos/cryptos.component';
import { DepositsComponent } from './deposits/deposits.component';
import { PredictComponent } from './predict/predict.component';


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
    UserModule,
    ComponentsModule,
  ],

})
export class DashboardModule { }
