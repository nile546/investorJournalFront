import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Modal } from 'src/app/shared/components/abstract/modal/modal';
import { Creditials } from 'src/app/shared/models/creditials/creditials.models';
import { UserActions } from '../store/user/user.actions';


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
  }


  public signin(): void {
    if (this.signinForm.invalid) {
      return;
    }


    const creditials = new Creditials();
    creditials.email = this.signinForm.value.email;
    creditials.password = this.signinForm.value.password;


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
