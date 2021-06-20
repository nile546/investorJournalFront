import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { EnumTableComponent } from './enum-table/enum-table.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ModalComponent,
    SpinnerComponent,
    EnumTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProfileComponent,
    ModalComponent,
    SpinnerComponent,
    EnumTableComponent,
  ]

})
export class ComponentsModule { }
