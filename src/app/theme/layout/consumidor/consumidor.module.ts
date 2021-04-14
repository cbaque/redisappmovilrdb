import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumidorRoutingModule } from './consumidor-routing.module';
import { ConsumidorComponent } from './consumidor.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoUsuariosModule } from '../../shared/logo-usuarios/logo-usuarios.module';
import { LoginRedesModule } from '../../shared/login-redes/login-redes.module';


@NgModule({
  declarations: [ ConsumidorComponent ],
  imports: [
    CommonModule,
    ConsumidorRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LogoUsuariosModule,
    LoginRedesModule
  ]
})
export class ConsumidorModule { }
