import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserModule } from '../user/user.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ComponentsModule } from './shared/components/components.module';


@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserModule,
    ComponentsModule,
  ],

})
export class DashboardModule { }
