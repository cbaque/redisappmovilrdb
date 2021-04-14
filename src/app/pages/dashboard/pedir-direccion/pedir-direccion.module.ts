import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedirDireccionPage } from './pedir-direccion.page';
import { AgregarDireccionPage } from 'src/app/theme/layout/agregar-direccion/agregar-direccion.page';
import { AgregarDireccionNuevaComponent } from 'src/app/theme/layout/agregar-direccion-nueva/agregar-direccion-nueva.component';
import { MapaComponent } from 'src/app/theme/shared/mapa/mapa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PedirDireccionPage }]),
  ],
  declarations: [
    PedirDireccionPage
    , AgregarDireccionPage
    , AgregarDireccionNuevaComponent
    , MapaComponent
  ],
  entryComponents: [
    AgregarDireccionNuevaComponent
    , MapaComponent
  ]
})
export class PedirDireccionPageModule {}
