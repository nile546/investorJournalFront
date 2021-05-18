import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Type } from '@angular/core';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Inject, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { ConfirmSignupModalComponent } from 'src/app/modules/user/confirm-signup-modal/confirm-signup-modal.component';
import { SigninModalComponent } from 'src/app/modules/user/signin-modal/signin-modal.component';
import { SignupModalComponent } from 'src/app/modules/user/signup-modal/signup-modal.component';


import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';


export enum ModalComponents {
  Signup = 1,
  Signin,
  ConfirmSignup,
  SignupResult,
}


const allowedModalComponents = new Map<ModalComponents, any>([
  [ModalComponents.Signup, SignupModalComponent],
  [ModalComponents.Signin, SigninModalComponent],
  [ModalComponents.ConfirmSignup, ConfirmSignupModalComponent],
])


@Component({
  selector: 'tr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit, OnDestroy {

  @ViewChild('content', { read: ViewContainerRef }) public content: ViewContainerRef | undefined;

  public isModalOpen: boolean = false;
  private _unsubsribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {

    this._store.select(ModalSelectors.isModalOpen).pipe(
      tap((status: boolean) => {

        this.isModalOpen = status;
        this._changeDetectorRef.detectChanges();

        /**
         *  Overflow is hidden for body when modal opened.
         */
        const value = status ? 'hidden' : 'auto';
        this._renderer.setStyle(this._document.body, 'overflow', value);

      }),
      switchMap((_: boolean) => {
        return this._store.select(ModalSelectors.modalComponent);
      }),
      takeUntil(this._unsubsribe),
    )
      .subscribe((modalComponent: any) => {
        if (!modalComponent) {
          this.content?.clear();
          return;
        }

        const component = allowedModalComponents.get(modalComponent);
        if (!component) {
          return;
        }

        const factory = this._componentFactoryResolver.resolveComponentFactory(component);
        this.content?.createComponent(factory);
        this._changeDetectorRef.detectChanges();
      });
  }


  public close(): void {
    this._store.dispatch(ModalActions.close());
  }


  ngOnDestroy(): void {
    this._unsubsribe.next(true);
    this._unsubsribe.unsubscribe();
  }
}
