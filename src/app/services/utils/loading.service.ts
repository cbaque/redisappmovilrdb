import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SMS_SISTEMA_GENERAL, CONFIG_GENERAL_SISTEMA } from 'src/app/interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: any;

  constructor(
    private loadingController: LoadingController
  ) { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: SMS_SISTEMA_GENERAL.LOADING,
      duration: CONFIG_GENERAL_SISTEMA.TIEMPO_LOADING
    });
    await this.loading.present();
  }

  async hideLoading() {
    const { role, data } = await this.loading.onDidDismiss();
  }



}
