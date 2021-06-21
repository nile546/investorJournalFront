import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ComponentsModule } from './shared/components/components.module';
import { DepositsComponent } from './deposits/deposits.component';
import { PredictComponent } from './predict/predict.component';
import { AuthModule } from '../auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/dashboard.effects';
import { StockDealsComponent } from './stock-deals/stock-deals.component';
import { StockService } from './shared/services/stock/stock.service';
import { StockDealService } from './shared/services/stock-deal/stock-deal.service';
import { CryptoDealsComponent } from './crypto-deals/crypto-deals.component';
import { StrategyService } from './shared/services/strategy/strategy.service';
import { PatternService } from './shared/services/pattern/pattern.service';
import { CurrencyRateService } from './shared/services/currency-rate/currency-rate.service';


@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    StockDealsComponent,
    CryptoDealsComponent,
    DepositsComponent,
    PredictComponent,
    CryptoDealsComponent,
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
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    StockService,
    StrategyService,
    PatternService,
    CurrencyRateService,
  ]

})
export class DashboardModule { }
