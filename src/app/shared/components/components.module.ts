import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationModalComponent } from 'src/app/modules/profile/registration-modal/registration-modal.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ModalComponent,
    RegistrationModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProfileComponent,
    ModalComponent,
  ]

})
export class ComponentsModule { }
