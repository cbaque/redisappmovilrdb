import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecicladorComponent } from './reciclador.component';


const routes: Routes = [
  {
    path: '',
    component: RecicladorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecicladorRoutingModule { }
