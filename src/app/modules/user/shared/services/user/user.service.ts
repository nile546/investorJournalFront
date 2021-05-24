import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Result } from 'src/app/shared/models/result/result.model';
import { User } from 'src/app/shared/models/user/user.model';
import { Creditials } from 'src/app/shared/models/creditials/creditials.models';


@Injectable()
export class UserService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  public signup(user: User): Observable<Result> {
    return this._httpClient.post<Result>(
      'users/signup',
      {
        login: user.login,
        email: user.email,
        password: user.password,
      }
    )
  }


  public signin(creditials: Creditials): Observable<Result> {
    return this._httpClient.post<Result>(
      'users/signin',
      {
        email: creditials.email,
        password: creditials.password,
      }
    )
  }


  public confirmSignup(token: string): Observable<Result> {
    return this._httpClient.post<Result>(
      'users/confirm-signup',
      { token },
    )
  }
}
