import { Component, OnInit, ChangeDetectionStrategy, Injector, Input, Output, EventEmitter } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Pagination, TableParams, TableSettings } from 'silly-datatable';

import { DropdownTable } from 'src/app/shared/components/abstract/dropdown-table/dropdown-table';
import { Result } from 'src/app/shared/models/result/result.model';
import { Strategy } from 'src/app/shared/models/strategy/strategy.model';
import { environment } from 'src/environments/environment';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';


@Component({
  selector: 'tr-strategy-table',
  templateUrl: './strategy-table.component.html',
  styleUrls: ['./strategy-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StrategyTableComponent extends DropdownTable implements OnInit {

  @Input() public searchText = '';

  @Output() public strategy: EventEmitter<Strategy> = new EventEmitter<Strategy>();

  constructor(
    _injector: Injector,
  ) {
    super(_injector);


    this.settings = {
      tableClass: 'dropdown__table',
      dataNotFoundPhrase: 'Данные не найдены',
      itemsPerPageList: [environment.itemsPerPageLookup],
    } as TableSettings;


    this.columns = [
      {
        id: 'name',
        cellClass: 'dropdown__cell'
      }
    ];
  }


  ngOnInit(): void {
    this._tableParams = {
      pagination: {
        pageNumber: 0,
        itemsPerPage: environment.itemsPerPageLookup,
      } as Pagination
    }


    this._store.select(DashboardSelectors.getAllStrategiesResult).pipe(
      filter(data => !!data),
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {

        const source = this.searchText
          ? (result?.payload as TableParams).source
          : (this._tableParams.source || []).concat((result?.payload as TableParams).source);

        const pagination = Object.assign({}, (result?.payload as TableParams).pagination);

        this._tableParams = Object.assign({}, result?.payload as TableParams, { pagination, source });
        this._changeDetectorRef.detectChanges();
      })
  }


  public get tableParams(): TableParams {
    return this._tableParams;
  }


  public set tableParams(value: TableParams) {
    const tableParams = Object.assign({}, value, { source: [] })
    this._store.dispatch(DashboardActions.getAllStrategies({ tableParams }));
  }


  public select(entity: Strategy) {
    if (!entity) {
      return;
    }

    this.strategy.emit(entity);
  }
}
