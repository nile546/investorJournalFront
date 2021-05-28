import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs/operators';
import { Modal } from 'src/app/shared/components/abstract/modal/modal';
import { Creditials } from 'src/app/shared/models/creditials/creditials.models';
import { Result, ResultStatuses } from 'src/app/shared/models/result/result.model';
import { User } from 'src/app/shared/models/user/user.model';
import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';
import { UserActions } from '../store/user/user.actions';
import { UserSelectors } from '../store/user/user.selectors';


@Component({
  selector: 'tr-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninModalComponent extends Modal implements OnInit {

  public signinForm: FormGroup = this.signinFormInit();

  constructor(
    _injector: Injector,
  ) {
    super(_injector);
  }

  ngOnInit(): void {
    this.loading = this.store.select(ModalSelectors.showSpinner);
  }


  public signin(): void {
    if (this.signinForm.invalid) {
      return;
    }

    const creditials = new Creditials();
    creditials.email = this.signinForm.value.email;
    creditials.password = this.signinForm.value.password;

    this.store.dispatch(ModalActions.showSpinner({ status: true }));
    this.store.select(UserSelectors.signinResult).pipe(
      filter(result => !!result),
      takeUntil(this.unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this.store.dispatch(ModalActions.showSpinner({ status: false }));
        this.result = result;

        if (result?.status !== ResultStatuses.Ok ) {
          this.changeDetectorRef.detectChanges();
          return;
        }

        this.store.dispatch(UserActions.setCurrentUser({ currentUser: result.payload as User }));
        this.store.dispatch(ModalActions.close());
      });


    this.store.dispatch(UserActions.signin({ creditials }));
  }


  private signinFormInit(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

}
