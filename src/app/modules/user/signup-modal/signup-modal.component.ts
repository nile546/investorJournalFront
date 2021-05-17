import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Modal } from 'src/app/shared/components/abstract/modal/modal';
import { User } from 'src/app/shared/models/user/user.model';
import { UserActions } from '../store/user/user.actions';


export interface SignupFormValues {
  login: string;
  email: string;
  password: string;
  checkPassword: string;
}


@Component({
  selector: 'tr-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupModalComponent extends Modal {

  public signupForm: FormGroup = this.signupFormInit();

  constructor(
    private _store: Store
  ) {
    super();
  }


  public create(): void {
    if (this.signupForm.invalid) {
      return;
    }

    const formValues: SignupFormValues = this.signupForm.value;

    const currentUser = new User();
    currentUser.login = formValues.login;
    currentUser.email = formValues.email;
    currentUser.password = formValues.password;

    this._store.dispatch(UserActions.signup({ user: currentUser }));
  }


  private signupFormInit(): FormGroup {
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
    }, this.comparePasswordsValidator);
  }


  private comparePasswordsValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value.password !== control.value.checkPassword ? { comparePasswordsValidator: true } : null;
  }
}
