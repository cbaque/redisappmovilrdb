import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperadorComponent } from './recuperador.component';


const routes: Routes = [
  {
    path: '',
    component: RecuperadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperadorRoutingModule { }
