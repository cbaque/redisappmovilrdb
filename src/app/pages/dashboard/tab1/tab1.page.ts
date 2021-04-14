import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InfoQueReciclarComponent } from 'src/app/theme/shared/info-que-reciclar/info-que-reciclar.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuario: Usuario = {};
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor(
    private usrServ: UsuarioService,
    public modalController: ModalController
  ) {

    // this.usuario = this.usrServ.getUsuario();
    this.usrServ.getUsuario().then((res: Usuario) =>  this.usuario = res);

  }

  afterslidesLoad(slides): void {
    slides.startAutoplay();
  }

  async showModalInfoQueReciclar() {

    const modal = await this.modalController.create({
      component: InfoQueReciclarComponent
    });
    return await modal.present();

  }

  goToSite( link: string ) {
    window.location.href = link
  }

}
