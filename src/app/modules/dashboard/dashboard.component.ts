import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { DASHBOARD } from 'src/app/shared/constants/routes';
import { STATISTICS } from './shared/constants/routes';


@Component({
  selector: 'tr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this._renderer.setStyle(this._document.body, 'overflow', 'hidden');
    this._router.navigate([DASHBOARD, STATISTICS]);
  }


  ngOnDestroy(): void {
    this._renderer.setStyle(this._document.body, 'overflow', 'auto');
  }
}
