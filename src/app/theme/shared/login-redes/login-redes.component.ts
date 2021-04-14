import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Sociales } from 'src/app/interfaces/auth';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-redes',
  templateUrl: './login-redes.component.html',
  styleUrls: ['./login-redes.component.scss'],
})
export class LoginRedesComponent implements OnInit {

  constructor(
    private login: LoginService,
    private googlePlus: GooglePlus,
    private route: Router,
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
      console.log( err );
      // alert( err );

    });

  }

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

}
