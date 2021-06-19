import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableParams } from 'silly-datatable';
import { Result } from 'src/app/shared/models/result/result.model';

@Injectable({
  providedIn: 'root'
})
export class DepositDealService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getAll(tableParams: TableParams): Observable<Result> {
    return this._httpClient.post<Result>(
      'deposit-deals/getAll',
      { tableParams }
    )
  }
}
