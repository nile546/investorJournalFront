import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LANDING } from './shared/constants/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: LANDING,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
