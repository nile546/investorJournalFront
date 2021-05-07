import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Result } from 'src/app/shared/models/user/result/result.model';
import { User } from 'src/app/shared/models/user/user.model';


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
}
