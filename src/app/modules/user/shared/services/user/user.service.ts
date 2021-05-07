import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Result } from 'src/app/shared/models/user/result/result.model';
import { User } from 'src/app/shared/models/user/user.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  public signup(user: User): Observable<Result> {
    return this._httpClient.post<Result>(
      'signup',
      { user }
    )
  }
}
