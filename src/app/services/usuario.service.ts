import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Data } from '../interfaces/auth';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { LoadingService } from './utils/loading.service';

const apiUlr = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  usuario: Usuario = {};

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private http: HttpClient,
    private loadingSrv: LoadingService,
  ) { }

  // save token storage
  async guardarToken( data: Data ) {
    const datos: any = data.data;

    this.token = datos.token;
    this.usuario = datos.user;
    await this.storage.set('token', datos.token);

    // await this.validaToken();
  }

  // load token
  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  // check token && and get data user login
  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/signin');
      return Promise.resolve(false);
    }

    this.loadingSrv.presentLoading();

    return new Promise<boolean>( resolve => {

      this.http.get(`${ apiUlr }/auth/payload`)
        .subscribe( (resp: Usuario) => {
          if ( resp ) {
            this.usuario = resp;
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/signin');
            resolve(false);
          }

        });
    });

  }

  async getUsuario() {
    if ( !this.usuario.username ) {
      await this.validaToken();
    }
    return { ...this.usuario };
  }

}
