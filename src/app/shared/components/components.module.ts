import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ModalComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileComponent,
    ModalComponent,
    SpinnerComponent,
  ]

})
export class ComponentsModule { }
