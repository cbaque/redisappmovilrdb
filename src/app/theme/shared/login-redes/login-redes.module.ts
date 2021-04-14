import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginRedesComponent } from './login-redes.component';

@NgModule({
  declarations: [ LoginRedesComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginRedesComponent }]),
    IonicModule.forRoot(),
  ],
  exports: [
    LoginRedesComponent
  ]
})
export class LoginRedesModule { }
