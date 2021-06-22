import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableParams } from 'silly-datatable';
import { DepositDeal } from 'src/app/shared/models/deposit-deal/deposit-deal.model';
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
      { tableParams },
    )
  }


  public create(depositDeal: DepositDeal): Observable<Result> {
    return this._httpClient.post<Result>(
      'deposit-deals/create',
      { depositDeal },
    )
  }
}
