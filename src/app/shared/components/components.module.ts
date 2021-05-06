import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileComponent,
    ModalComponent,
  ]

})
export class ComponentsModule { }
