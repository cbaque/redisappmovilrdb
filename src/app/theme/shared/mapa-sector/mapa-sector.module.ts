import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapaSectorComponent } from './mapa-sector.component';

@NgModule({
  declarations: [ MapaSectorComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MapaSectorComponent }]),
    IonicModule.forRoot()
  ],
  exports: [
    MapaSectorComponent
  ]
})
export class MapaSectorModule { }
