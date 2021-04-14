import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  usuario: Usuario = {};

  constructor(
    private usrServ: UsuarioService,
    private router: Router,
  ) {

    this.usrServ.getUsuario().then((res) => this.usuario = res);

  }

}
