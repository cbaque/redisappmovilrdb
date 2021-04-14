import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecicladorRoutingModule } from './reciclador-routing.module';
import { RecicladorComponent } from './reciclador.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapaSectorModule } from '../../shared/mapa-sector/mapa-sector.module';
import { ProductosModule } from '../../shared/productos/productos.module';
import { DiasRecoleccionModule } from '../../shared/dias-recoleccion/dias-recoleccion.module';
import { InfoRegistrosModule } from '../../shared/info-registros/info-registros.module';
import { LogoUsuariosModule } from '../../shared/logo-usuarios/logo-usuarios.module';


@NgModule({
  declarations: [
    RecicladorComponent
  ],
  imports: [
    CommonModule,
    RecicladorRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MapaSectorModule,
    ProductosModule,
    DiasRecoleccionModule,
    InfoRegistrosModule,
    LogoUsuariosModule
  ]
})
export class RecicladorModule { }
