import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Data } from 'src/app/interfaces/auth';
import { MensajeService } from 'src/app/services/mensaje.service';
import { LoadingService } from 'src/app/services/utils/loading.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
// import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';


@Component({
  selector: 'app-auth-signin-go',
  templateUrl: './auth-signin-go.page.html',
  styleUrls: ['./auth-signin-go.page.scss'],
})
export class AuthSigninGoPage implements OnInit, OnDestroy{

  loginForm: FormGroup;
  loginSubscription: Subscription;
  mensaje = '';

  constructor(
    public formBuilder: FormBuilder,
    private loginSrv: LoginService,
    private route: Router,
    private mensajeSrv: MensajeService,
    private loadingSrv: LoadingService,
    private userSrv: UsuarioService,
    private http: HttpClient,
    private usrServ: UsuarioService,
    // public streamingMedia: StreamingMedia
  ) {
    this.loginForm = this.createLoginForm();
   }

  ngOnInit() {

    // const options: StreamingVideoOptions = {
    //   successCallback: () => { console.log('Video played'); },
    //   errorCallback: (e) => { console.log('Error streaming'); },
    //   orientation: 'landscape',
    //   shouldAutoClose: true,
    //   controls: false
    // };

    // this.streamingMedia.playVideo('https://path/to/video/stream', options);

  }

  createLoginForm() {
    return this.formBuilder.group({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  async login() {
    const data = {
      user : this.f.usuario.value,
      password: this.f.password.value,
      movil: 'APP'
    };

    this.loadingSrv.presentLoading();
    const valido = await this.loginSrv.login( data );
    if ( valido ) {

      this.route.navigate(['/dashboard/grafico']);
      this.loadingSrv.hideLoading();

    }

    // this.loginSubscription = this.loginSrv.Login(data)
    // .subscribe(async (res: any) => {
    //     this.route.navigate(['/dashboard/grafico']);
    //     this.loadingSrv.hideLoading();
    //     await this.usrServ.guardarToken( res.access_token );
    //   },
    //   (err: any ) => {
    //     this.mensajeSrv.mensajeAlerta( err.error.message, false );
    //     this.loadingSrv.hideLoading();
    //   }
    // );
  }

  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    (this.loginSubscription) ? this.loginSubscription.unsubscribe() : '';
  }


}
