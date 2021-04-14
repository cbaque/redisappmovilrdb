import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { LandingRecicladorComponent } from './landing-reciclador/landing-reciclador.component';
import { LandingConsumidorComponent } from './landing-consumidor/landing-consumidor.component';
import { InfoQueReciclarModule } from 'src/app/theme/shared/info-que-reciclar/info-que-reciclar.module';

@NgModule({
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [
      Tab1Page
    , LandingRecicladorComponent
    , LandingConsumidorComponent
  ]
})
export class Tab1PageModule {}
