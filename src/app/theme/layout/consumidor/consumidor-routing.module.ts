import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumidorComponent } from './consumidor.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumidorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumidorRoutingModule { }
