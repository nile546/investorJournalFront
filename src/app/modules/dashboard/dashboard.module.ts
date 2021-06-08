import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ComponentsModule } from './shared/components/components.module';
import { CryptosComponent } from './cryptos/cryptos.component';
import { DepositsComponent } from './deposits/deposits.component';
import { PredictComponent } from './predict/predict.component';
import { AuthModule } from '../auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/dashboard.effects';
import { StockDealService } from './shared/services/stock/stock-deal.service';
import { StockDealsComponent } from './stock-deals/stock-deals.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    StockDealsComponent,
    CryptosComponent,
    DepositsComponent,
    PredictComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthModule,
    ComponentsModule,
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [
    StockDealService,
  ]

})
export class DashboardModule { }
