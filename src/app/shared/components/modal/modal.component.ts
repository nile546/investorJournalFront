import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Type } from '@angular/core';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Inject, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';
import { Modal } from '../abstract/modal/modal';


@Component({
  selector: 'tr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit, OnDestroy {

  @ViewChild('content', { static: true, read: ViewContainerRef }) public content: ViewContainerRef | undefined;

  public isModalOpen: Observable<boolean> | undefined;

  private _modalComponent: Observable<Type<Modal> | null> | undefined;
  private _unsubsribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {
    this.isModalOpen = this._store.select(ModalSelectors.isModalOpen);
    this._modalComponent = this._store.select(ModalSelectors.modalComponent)


    // Overflow is hidden for body when modal opened.
    this.isModalOpen.pipe(
      takeUntil(this._unsubsribe)
    )
      .subscribe((status: boolean) => {
        if (status) {
          this._renderer.setStyle(this._document.body, 'overflow', 'hidden');
          return;
        }

        this._renderer.setStyle(this._document.body, 'overflow', 'auto');
      });


    this._modalComponent.pipe(
      takeUntil(this._unsubsribe),
    )
      .subscribe((modalComponent: Type<Modal> | null) => {
        if (!modalComponent) {
          this.content?.clear();
          return;
        }


        console.log('zzzzzzzzzzzzzzzzzzzzz', this.content);
        const factory = this._componentFactoryResolver.resolveComponentFactory<Modal>(modalComponent);
        const instance = this.content?.createComponent(factory);
        this._changeDetectorRef.detectChanges();



      });
  }


  public close(): void {
    this._store.dispatch(ModalActions.close());
<<<<<<< HEAD
  }


  ngOnDestroy(): void {
    this._unsubsribe.next(true);
    this._unsubsribe.unsubscribe();
=======
>>>>>>> dae99ed7681ba091e8b4a5161ee769fbc352187a
  }
}
