import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from './horario.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ HorarioComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HorarioComponent }]),
    IonicModule.forRoot(),
    FormsModule
  ],
  exports: [
    HorarioComponent
  ]
})
export class HorarioModule { }
