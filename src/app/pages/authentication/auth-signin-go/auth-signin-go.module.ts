import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthSigninGoPageRoutingModule } from './auth-signin-go-routing.module';

import { AuthSigninGoPage } from './auth-signin-go.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    AuthSigninGoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthSigninGoPage]
})
export class AuthSigninGoPageModule {}
