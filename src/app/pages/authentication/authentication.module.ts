import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InformacionPage } from 'src/app/theme/layout/informacion/informacion.page';

@NgModule({
  declarations: [InformacionPage],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  entryComponents: [
    InformacionPage,
  ],
})
export class AuthenticationModule { }
