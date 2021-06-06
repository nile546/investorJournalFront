import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { ConfirmSignupModalComponent } from './confirm-signup-modal/confirm-signup-modal.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserGuard } from './shared/guards/user-guard';
import { AuthService } from './shared/services/user/auth.service';
import { AuthEffects } from './store/user/auth.effects';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffects]),
    ComponentsModule
  ],
  declarations: [
    SignupModalComponent,
    SigninModalComponent,
    ConfirmSignupModalComponent,
  ],
  providers: [
    AuthService,
    UserGuard,
  ]
})
export class AuthModule { }
