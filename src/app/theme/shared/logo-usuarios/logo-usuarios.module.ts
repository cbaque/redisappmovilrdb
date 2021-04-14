import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoUsuariosComponent } from './logo-usuarios.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ LogoUsuariosComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LogoUsuariosComponent }]),
    IonicModule.forRoot(),
  ],
  exports: [
    LogoUsuariosComponent
  ]
})
export class LogoUsuariosModule { }
