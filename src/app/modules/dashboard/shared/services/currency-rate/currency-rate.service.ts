import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/shared/models/result/result.model';


@Injectable()
export class CurrencyRateService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getAll(): Observable<Result> {
    return this._httpClient.post<Result>(
      'currency-rates/getAll',
      {}
    )
  }
}
