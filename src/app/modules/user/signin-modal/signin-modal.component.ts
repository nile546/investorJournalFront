import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Creditials } from 'src/app/shared/models/creditials/creditials.models';
import { UserActions } from '../store/user/user.actions';


@Component({
  selector: 'tr-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninModalComponent implements OnInit {

  public signinForm: FormGroup = this.signinFormInit();

  constructor(
    private _store: Store
  ) { }

  ngOnInit(): void {
  }


  public signin(): void {
    if (this.signinForm.invalid) {
      return;
    }


    const creditials = new Creditials();
    creditials.email = this.signinForm.value.email;
    creditials.password = this.signinForm.value.password;


    this._store.dispatch(UserActions.signin({ creditials }));
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
