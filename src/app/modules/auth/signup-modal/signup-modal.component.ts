import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';

import { Modal } from 'src/app/shared/components/abstract/modal/modal';
import { Result } from 'src/app/shared/models/result/result.model';
import { User } from 'src/app/shared/models/user/user.model';
import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';
import { AuthActions } from '../store/user/auth.actions';
import { AuthSelectors } from '../store/user/auth.selectors';


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
export class SignupModalComponent extends Modal implements OnInit {

  public signupForm: FormGroup = this.signupFormInit();

  constructor(
    _injector: Injector,
  ) {
    super(_injector);
  }


  ngOnInit(): void {
    this.loading = this.store.select(ModalSelectors.showSpinner);
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

    this.store.dispatch(ModalActions.showSpinner({ status: true }));
    this.store.select(AuthSelectors.signupResult).pipe(
      filter(result => !!result),
      takeUntil(this.unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this.store.dispatch(ModalActions.showSpinner({ status: false }));
        this.result = result;
        this.changeDetectorRef.detectChanges();
      });

    this.store.dispatch(AuthActions.signup({ user: currentUser }));
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
