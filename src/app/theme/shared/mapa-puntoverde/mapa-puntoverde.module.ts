import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapaPuntoverdeComponent } from './mapa-puntoverde.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ MapaPuntoverdeComponent ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forChild([{ path: '', component: MapaPuntoverdeComponent }]),
  ],
  exports: [
    MapaPuntoverdeComponent
  ]
})
export class MapaPuntoverdeModule { }
