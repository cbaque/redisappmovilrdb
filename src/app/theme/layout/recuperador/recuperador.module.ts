import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperadorRoutingModule } from './recuperador-routing.module';
import { RecuperadorComponent } from './recuperador.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapaSectorModule } from '../../shared/mapa-sector/mapa-sector.module';
import { ProductosModule } from '../../shared/productos/productos.module';
import { DiasRecoleccionModule } from '../../shared/dias-recoleccion/dias-recoleccion.module';
import { InfoRegistrosModule } from '../../shared/info-registros/info-registros.module';
import { LogoUsuariosModule } from '../../shared/logo-usuarios/logo-usuarios.module';


@NgModule({
  declarations: [
    RecuperadorComponent
  ],
  imports: [
    CommonModule,
    RecuperadorRoutingModule,
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
export class RecuperadorModule { }
