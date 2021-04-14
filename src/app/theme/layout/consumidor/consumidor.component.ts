import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Sociales } from 'src/app/interfaces/auth';
import { LoadingService } from 'src/app/services/utils/loading.service';
import { ValidacionRegistrosService } from 'src/app/helpers/validacion-registros.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.scss'],
})
export class ConsumidorComponent implements OnInit {

  CONSUMIDOR_FORM: FormGroup;
  title = 'Quiero clasificar y entregar mis residuos RECICLABLES y APROBECHABLES.';
  // subtitle = 'Registro de Consumidor';
  subtitle = '';

  constructor(
    private formBuilder: FormBuilder,
    private loadingSrv: LoadingService,
    public validator: ValidacionRegistrosService,
    private route: Router,
    public modalController: ModalController,
    private login: LoginService,

  ) { }

  ngOnInit() {
    this.CONSUMIDOR_FORM    = this.createConsumidorForm();
  }

  createConsumidorForm() {
    return this.formBuilder.group({
      // username:             new FormControl('', [ Validators.required, Validators.minLength(6) ] ),
      contrasenia:          new FormControl('', [ Validators.required, Validators.minLength(6) ] ),
      correo_electronico:   new FormControl('', [ Validators.required, Validators.email ] ),
      terminos_condiciones: new FormControl(false , [ Validators.requiredTrue ] ),
    });
  }

  get f() {
    return this.CONSUMIDOR_FORM.controls;
  }

  async onSubmit() {
    const data: Sociales = {
      // user          : this.f.username.value,
      user          : this.f.correo_electronico.value,
      email         : this.f.correo_electronico.value,
      password      : this.f.contrasenia.value,
      name          : this.f.correo_electronico.value
    };

    this.loadingSrv.presentLoading();
    const valido = await this.login.register( data );
    if ( valido ) {
      this.CONSUMIDOR_FORM.reset();
      this.route.navigate(['/dashboard/grafico']);
    }
  }

}
