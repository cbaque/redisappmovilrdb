import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ProductosComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductosComponent }]),
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    ProductosComponent,
  ]
})
export class ProductosModule { }
