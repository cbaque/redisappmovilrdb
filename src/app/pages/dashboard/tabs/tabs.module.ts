import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { InfoQueReciclarModule } from 'src/app/theme/shared/info-que-reciclar/info-que-reciclar.module';
import { MapaComponent } from 'src/app/theme/shared/mapa/mapa.component';
import { AgregarDireccionNuevaComponent } from 'src/app/theme/layout/agregar-direccion-nueva/agregar-direccion-nueva.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule,
    InfoQueReciclarModule
  ],
  declarations: [TabsPage  ],
  entryComponents: [ ]
})
export class TabsPageModule {}
