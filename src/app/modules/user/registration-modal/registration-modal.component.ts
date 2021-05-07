import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Modal } from 'src/app/shared/components/abstract/modal/modal';
import { User } from 'src/app/shared/models/user/user.model';
import { UserActions } from '../store/user/user.actions';


export interface RegistrationFormValues {
  login: string;
  email: string;
  password: string;
  checkPassword: string;
}


@Component({
  selector: 'tr-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationModalComponent extends Modal {

  public registrationForm: FormGroup = this.registrationFormInit();

  constructor(
    private _store: Store
  ) {
    super();
  }


  public create(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const formValues: RegistrationFormValues = this.registrationForm.value;

    const currentUser = new User();
    currentUser.login = formValues.login;
    currentUser.email = formValues.email;
    currentUser.password = formValues.password;

    this._store.dispatch(UserActions.signup({ user: currentUser }));
  }


  private registrationFormInit(): FormGroup {
    return new FormGroup({

      login: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      checkPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
}
