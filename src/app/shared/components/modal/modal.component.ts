import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';


@Component({
  selector: 'tr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {

  public isModalOpen: Observable<boolean> | undefined;

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();


  constructor(
    private _store: Store,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) { }


  ngOnInit(): void {
    this.isModalOpen = this._store.select(ModalSelectors.isModalOpen);


    // Overflow is hidden for body when modal opened.
    this.isModalOpen.pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe((status: boolean) => {
        if (status) {
          this._renderer.setStyle(this._document.body, 'overflow', 'hidden');
          return;
        }

        this._renderer.setStyle(this._document.body, 'overflow', 'auto');
      });
  }


  public close(): void {
    this._store.dispatch(ModalActions.hide());
  }
}
