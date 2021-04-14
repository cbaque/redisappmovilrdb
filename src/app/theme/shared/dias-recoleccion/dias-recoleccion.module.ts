import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiasRecoleccionComponent } from './dias-recoleccion.component';
import { IonicModule } from '@ionic/angular';
import { HorarioModule } from './horario/horario.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DiasRecoleccionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DiasRecoleccionComponent }]),
    IonicModule.forRoot(),
    HorarioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DiasRecoleccionComponent
  ]
})
export class DiasRecoleccionModule { }
