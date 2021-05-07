import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationModalComponent } from './registration-modal/registration-modal.component';
import { UserService } from './shared/services/user/user.service';
import { UserEffects } from './store/user/user.effects';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [
    RegistrationModalComponent,
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
