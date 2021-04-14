import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Sociales } from 'src/app/interfaces/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ModalController } from '@ionic/angular';
import { InformacionPage } from 'src/app/theme/layout/informacion/informacion.page';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSigninComponent implements OnInit {

  mostrarOpciones = false;
  arrayUsers = [
    {
    'avatar': 'consumidor-generador.svg',
    'link' : '/consumidor'
    },
    {
      'avatar': 'reciclador-base.svg',
      'link' : '/reciclador'
    },
    {
      'avatar': 'centro-de-acopio.svg',
      'link' : '/recuperador'
    },    
  ]

  constructor(
    private login: LoginService,
    private route: Router,
    private googlePlus: GooglePlus,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  loginFacebook() {

    this.login.loginFacebook().then( async (res: Sociales) => {
      if ( res ) {
        const valido = await this.login.register( res );
        if ( valido ) {
          this.route.navigate(['/dashboard/grafico']);
        }
      }
    }).catch( err => {
      alert( err );
    });

  }

  // loginGoogle() {
  //   this.login.loginGoogle().then( res => {
  //     console.log( 'RESPUESTA GMAIL ', res );
  //   });
  // }

  loginGoogle() {

    this.googlePlus.login({})
    .then(async res =>  {
      const data: Sociales = { email: res.email, name: res.email }
      const valido = await this.login.register( data );
      if ( valido ) {
        this.route.navigate(['/dashboard/grafico']);
      }
    })
    .catch(err => console.error(err));

  }

  showOpciones() {
    this.mostrarOpciones = true;
  }

  async showModalInfo() {
    const modal = await this.modalController.create({
      component: InformacionPage
    });
    return await modal.present();
  }

}
