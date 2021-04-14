import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AuthSigninComponent],
  imports: [
    CommonModule,
    AuthSigninRoutingModule,
    IonicModule
  ]
})
export class AuthSigninModule { }
