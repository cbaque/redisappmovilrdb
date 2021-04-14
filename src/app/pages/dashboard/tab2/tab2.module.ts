import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ProductoseleccionComponent } from './productoseleccion/productoseleccion.component';
import { DigitalComponent } from './digital/digital.component';
import { SegmentosComponent } from './segmentos/segmentos.component';
import { SegmentoRecicladorComponent } from './segmentos/segmento-reciclador/segmento-reciclador.component';
import { SegmentoVerdeComponent } from './segmentos/segmento-verde/segmento-verde.component';
import { CantidadProdComponent } from './cantidad-prod/cantidad-prod.component';
import { ImageSanitizerPipe } from 'src/app/pipes/image-sanitizer.pipe';
import { InfoPostSaveComponent } from './info-post-save/info-post-save.component';
import { LandingRecicladorTab2Component } from './landing-reciclador-tab2/landing-reciclador-tab2.component';
import { MapaBuscquedaComponent } from 'src/app/theme/shared/mapa-buscqueda/mapa-buscqueda.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
  ],
  declarations: [
    Tab2Page
    , ProductoseleccionComponent
    , DigitalComponent
    , SegmentosComponent
    , SegmentoRecicladorComponent
    , SegmentoVerdeComponent
    , CantidadProdComponent
    , ImageSanitizerPipe
    , InfoPostSaveComponent
    , LandingRecicladorTab2Component
    , MapaBuscquedaComponent
  ],
  entryComponents: [
    CantidadProdComponent,
    InfoPostSaveComponent,
    MapaBuscquedaComponent
  ],
})
export class Tab2PageModule {}
