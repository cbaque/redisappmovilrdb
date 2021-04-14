import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthSigninGoPage } from './auth-signin-go.page';

const routes: Routes = [
  {
    path: '',
    component: AuthSigninGoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthSigninGoPageRoutingModule {}
