import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { result } from 'lodash';
import { Subject } from 'rxjs';
import { filter, finalize, take, takeUntil } from 'rxjs/operators';

import { Modal } from 'src/app/shared/components/abstract/modal/modal';
import { Result } from 'src/app/shared/models/result/result.model';
import { User } from 'src/app/shared/models/user/user.model';
import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';
import { UserActions } from '../store/user/user.actions';
import { UserSelectors } from '../store/user/user.selectors';


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
export class SignupModalComponent extends Modal implements OnInit, OnDestroy {

  public signupForm: FormGroup = this.signupFormInit();
  public result: Result | null = null;

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    super();
  }


  ngOnInit(): void {
    this.loading = this._store.select(ModalSelectors.showSpinner);
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

    this._store.dispatch(ModalActions.showSpinner({ status: true }));
    this._store.select(UserSelectors.signupResult).pipe(
      filter(result => !!result),
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this._store.dispatch(ModalActions.showSpinner({ status: false }));
        this.result = result;
        this._changeDetectorRef.detectChanges();
      });

    this._store.dispatch(UserActions.signup({ user: currentUser }));
  }


  public close(): void {
    this._store.dispatch(ModalActions.close());
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


  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.unsubscribe();
  }
}
