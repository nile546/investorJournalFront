import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableParams } from 'silly-datatable';
import { CryptoDeal } from 'src/app/shared/models/crypto-deal/crypto-deal.model';
import { Result } from 'src/app/shared/models/result/result.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoDealService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getAll(tableParams: TableParams): Observable<Result> {
    return this._httpClient.post<Result>(
      'crypto-deals/getAll',
      { tableParams }
    )
  }

  public create(cryptoDeal: CryptoDeal): Observable<Result> {
    return this._httpClient.post<Result>(
      'crypto-deals/create',
      { cryptoDeal },
    )
  }
}
