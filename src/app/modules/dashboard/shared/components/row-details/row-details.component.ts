import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';
import { StockDealDetailsComponent } from '../stock-deal-details/stock-deal-details.component';


export enum DetailsComponents {
  StockDealDetails = 1,
}


const allowedDetailsComponents = new Map<DetailsComponents, any>([
  [DetailsComponents.StockDealDetails, StockDealDetailsComponent],
])


@Component({
  selector: 'tr-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowDetailsComponent implements OnInit {

  @ViewChild('content', { read: ViewContainerRef }) public content: ViewContainerRef | undefined;

  public show = false;

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store,
    private _changeDetectorRef: ChangeDetectorRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {

    combineLatest([
      this._store.select(DashboardSelectors.rowDetailsComponent),
      this._store.select(DashboardSelectors.rowDetailsPayload)
    ]).pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe(([detailsComponent, payload]: [DetailsComponents | null, unknown | null]) => {
        this.show = !!detailsComponent;
        this._changeDetectorRef.detectChanges();

        if (this.show) {
          const component = allowedDetailsComponents.get(detailsComponent as DetailsComponents);
          const factory = this._componentFactoryResolver.resolveComponentFactory(component);
          const details = this.content?.createComponent(factory);
        } else {
          this.content?.clear();
        }

        this._changeDetectorRef.detectChanges();
      });
  }


  public close(): void {
    this._store.dispatch(DashboardActions.rowDetails({ component: null, payload: null }));
  }
}
