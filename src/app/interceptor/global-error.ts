import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/utils/error.service';
import { LoginService } from '../services/login.service';
import { MensajeService } from '../services/mensaje.service';
import { UsuarioService } from '../services/usuario.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable()
export class GlobalError implements ErrorHandler {
  constructor(
    private injector: Injector,
    private loginServ: LoginService,
    private mensajeSrv: MensajeService,
    private navCtrl: NavController,
  ) { }

  handleError(error: Error | HttpErrorResponse): void {
    // tslint:disable-next-line: no-debugger
    const errorService = this.injector.get(ErrorService);
    let message;

    // let stackTrace;
    if (error instanceof HttpErrorResponse) {
        message = errorService.getServerErrorMessage(error);
        switch ( error.status ) {
          case 401: // CADUCA TOKEN
            this.loginServ.clearData();
            this.navCtrl.navigateRoot('/signin', { animated: true });
            this.mensajeSrv.mensajeAlerta( 'Su Sesión ha caducado', false );
            break;

          case 0: // ERROR DE CONECTIVIDAD AL SERVER
            this.mensajeSrv.mensajeAlerta( 'Error de Conexión', false );
            break;

          case 500: // ERROR PERSONALIZADOS
            this.mensajeSrv.mensajeAlerta( message.message, false );
            break;

        }
    } else {
      message = errorService.getClientErrorMessage(error);
      console.log( message )
      this.loginServ.clearData();
      this.mensajeSrv.mensajeAlerta( message, false );
      // this.mensajeSrv.mensajeAlerta( 'Error de Conexión ::  Consultar con Administrador', false );
      this.navCtrl.navigateRoot('/signin', { animated: true });
    }
  }
// tslint:disable-next-line: eofline
}