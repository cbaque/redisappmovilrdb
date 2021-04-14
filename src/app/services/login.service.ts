import { Injectable, OnDestroy } from '@angular/core';
import { EnvService } from './env.service';
import { Data, Respuesta, Sociales } from '../interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Consumidor } from '../interfaces/consumidor';
import { ACCIONES_POST_GET_SISTEMA, CONFIG_GENERAL_SISTEMA } from '../interfaces/config';
import { Subscription } from 'rxjs';
import { ConsumidorService } from './consumidor.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';



const apiUlr = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {
  consumidorSubs: Subscription;
  
  constructor(
    private DataServ: EnvService,
    private usrServ: UsuarioService,
    private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController,
    private fb: Facebook,
    private conSrv: ConsumidorService,
    private googlePlus: GooglePlus
  ) { }

  // Login(data: any) {
  //   return this.DataServ.postQuery<Data>(`/auth/login`, data);
  // }

  login( data: any ) {

    return new Promise<boolean>( resolve => {

      this.http.post(`${ apiUlr }/auth/login`, data )
        .subscribe( async (resp: Data) => {
          if ( resp.message === 'Ok' ) {
            await this.usrServ.guardarToken( resp );
            resolve(true);
          }
          // } else {
          //   this.usrServ.token = null;
          //   this.storage.remove('token');
          //   resolve(false);
          // }
        });
    });
  }

  async register( data: Sociales ) {
    return new Promise<boolean>( resolve => {

      this.http.post(`${ apiUlr }/auth/register`, data )
        .subscribe( async (resp: Data) => {
          if ( resp.message === 'Ok' ) {
            await this.usrServ.guardarToken( resp );
            resolve(true);
          }
          // } else {
          //   this.usrServ.token = null;
          //   this.storage.remove('token');
          //   resolve(false);
          // }
        });
    });
  }

  logout() {
    this.clearData();
    this.navCtrl.navigateRoot('/signin', { animated: true });
  }

  clearData() {

    this.storage.remove('token');
    this.usrServ.token   = null;
    this.usrServ.usuario = null;
    this.storage.clear();

  }

  // INGRESO DE REDES SOCIALES SOLO A CONSUMIDORES
  loginFacebook() {

    return this.fb.login(['email', 'public_profile']).then( (res: FacebookLoginResponse) => {
      console.log( 'FACEBOOK', res  );
      return this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
      .then( ( profile: Sociales) => {
        // tslint:disable-next-line: no-string-literal
        return profile;
      });


      // return res.authResponse.session_key;
    });

  }

  loginGoogle() {
    return this.googlePlus.login({})
    .then( (res ) => {
      console.log('GMAIL' , res );
      return res;
    });
    // .catch(err => console.error(err));

  }

  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    (this.consumidorSubs) ? this.consumidorSubs.unsubscribe() : '';
  }


}
