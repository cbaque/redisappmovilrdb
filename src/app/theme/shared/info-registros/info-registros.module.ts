import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfoRegistrosComponent } from './info-registros.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ InfoRegistrosComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: InfoRegistrosComponent }]),
  ],
  exports: [
    InfoRegistrosComponent
   ],
   entryComponents: [
    InfoRegistrosComponent,
  ],
})
export class InfoRegistrosModule { }
