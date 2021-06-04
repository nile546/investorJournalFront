import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { DASHBOARD } from 'src/app/shared/constants/routes';
import { STATISTICS } from './shared/constants/routes';


@Component({
  selector: 'tr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._router.navigate([DASHBOARD, STATISTICS]);
  }
}
