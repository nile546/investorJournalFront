import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';


@Component({
  selector: 'tr-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowDetailsComponent implements OnInit {

  public rowDetailsComponent: unknown | null = null;

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this._store.select(DashboardSelectors.rowDetailsComponent).pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe((component: unknown | null) => {
        this.rowDetailsComponent = component;
        this._changeDetectorRef.detectChanges();
      })
  }


  public close(): void {
    this._store.dispatch(DashboardActions.rowDetails({ component: null }));
  }
}
