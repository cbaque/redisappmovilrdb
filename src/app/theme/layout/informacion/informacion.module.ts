import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InformacionPage } from './informacion.page';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forChild([{ path: '', component: InformacionPage }])
  ]
})
export class InformacionModule { }
