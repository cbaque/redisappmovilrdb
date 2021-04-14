import { Injectable } from '@angular/core';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(
    private toastController: ToastController,
    public alertController: AlertController,
    private route: Router,
    private navCtrl: NavController,
  ) { }

  async mensaje( sms: string) {
    const toast = await this.toastController.create({
      message: sms,
      duration: 2000
    });

    toast.present();
  }

  async mensajeAlerta( sms: string, redirecciona: boolean ) {
    const alert = await this.alertController.create({
      header: 'Notificación',
      backdropDismiss: false,
      animated: true,
      message: sms,
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'primary',
          handler: () => {
            if ( redirecciona ) {
              this.navCtrl.navigateRoot('/signin', { animated: true });
              // this.route.navigate(['/auth/signin']);
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
