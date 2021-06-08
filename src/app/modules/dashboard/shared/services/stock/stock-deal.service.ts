import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TableParams } from 'silly-datatable';
import { Result } from 'src/app/shared/models/result/result.model';

@Injectable()
export class StockDealService {

  constructor(
    private _httpClient: HttpClient,
  ) { }


  public getAll(tableParams: TableParams): Observable<Result> {
    return this._httpClient.post<Result>(
      'stock-deals/getAll',
      { tableParams }
    )
  }

}
