import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { UserService } from './shared/services/user/user.service';
import { UserEffects } from './store/user/user.effects';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { ConfirmSignupModalComponent } from './confirm-signup-modal/confirm-signup-modal.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([UserEffects]),
    ComponentsModule
  ],
  declarations: [
    SignupModalComponent,
    SigninModalComponent,
    ConfirmSignupModalComponent,
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
