import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfoQueReciclarComponent } from './info-que-reciclar.component';
import { IonicModule } from '@ionic/angular';
import { MaterialesComponent } from './materiales/materiales.component';

@NgModule({
  declarations: [ InfoQueReciclarComponent, MaterialesComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: InfoQueReciclarComponent }]),
  ],
  exports: [
    InfoQueReciclarComponent
  ],
  entryComponents: [
    InfoQueReciclarComponent
  ]
})
export class InfoQueReciclarModule { }
