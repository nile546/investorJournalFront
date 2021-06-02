import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserModule } from '../user/user.module';
import { AsideComponent } from './shared/components/aside/aside.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [DashboardComponent, AsideComponent, StatisticsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserModule,
  ],

})
export class DashboardModule { }
