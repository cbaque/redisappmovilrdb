import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Catalogos, accionCatalogo } from 'src/app/interfaces/catalogo';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

import { RecicladorService } from 'src/app/services/reciclador.service';
import { Reciclador } from 'src/app/interfaces/reciclador';
import { ACCIONES_POST_GET_SISTEMA, CONFIG_GENERAL_SISTEMA } from 'src/app/interfaces/config';
import { LoadingService } from 'src/app/services/utils/loading.service';
import { Respuesta } from 'src/app/interfaces/auth';
import { MensajeService } from 'src/app/services/mensaje.service';
import { ValidacionRegistrosService, MustMatch } from 'src/app/helpers/validacion-registros.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoRegistrosModule } from 'src/app/theme/shared/info-registros/info-registros.module';
import { InfoRegistrosComponent } from 'src/app/theme/shared/info-registros/info-registros.component';

@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.scss'],
})
export class RecicladorComponent implements OnInit, OnDestroy {

  // LIST_SECTOR: Observable<Catalogos[]>;
  recicladorForm: FormGroup;
  recicladorSubs: Subscription;
  arrayProductos: FormArray;
  arrayDias: FormArray;
  arrayDirecciones: FormArray;

  title = 'Quiero que me contactes para llevarme tus RESIDUOS RECICLABLES clasificados.';
  subtitle = 'Registro Reciclador de Base';

  constructor(
    private catalogoSrv: CatalogoService,
    private formBuilder: FormBuilder,
    private loadingSrv: LoadingService,
    private dataSrv: RecicladorService,
    private mensajeSrv: MensajeService,
    public validator: ValidacionRegistrosService,
    private route: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    // this.LIST_SECTOR = this.catalogoSrv.listaSectorCatalogos(accionCatalogo.SECTOR);
    this.recicladorForm = this.createRecicladorForm();
    this.arrayProductos = this.recicladorForm.get('productos') as FormArray;
    this.arrayDias = this.recicladorForm.get('dias') as FormArray;
    this.arrayDirecciones = this.recicladorForm.get('direcciones') as FormArray;
  }

  createRecicladorForm() {
    return this.formBuilder.group({
      nombre:     new FormControl('', [ Validators.required] ),
      apellido:   new FormControl('', [ Validators.required] ),
      telefono:   new FormControl('', [ Validators.required] ),
    });
  }

  createRecicladorForm2() {
    return this.formBuilder.group({
      ruc_ci:               new FormControl('', [ Validators.required] ),
      username:             new FormControl('', [ Validators.required, Validators.minLength(6) ] ),
      correo_electronico:   new FormControl('', [ Validators.required, Validators.email ] ),
      contrasenia:          new FormControl('', [ Validators.required, Validators.minLength(6) ] ),
      confirmPassword:      new FormControl('', [ Validators.required] ),
      edad:                 new FormControl(''),
      telefono:             new FormControl(''),
      // id_sector:            new FormControl('', [Validators.required]),
      direccion:            new FormControl(''),
      asociado:             new FormControl(false),
      productos:            this.formBuilder.array([]),
      dias:                 this.formBuilder.array([]),
      direcciones:          this.formBuilder.array([]),
    }, {
      validator: MustMatch('contrasenia', 'confirmPassword')
    });
  }

  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    (this.recicladorSubs) ? this.recicladorSubs.unsubscribe() : '';
  }

  get f() {
    return this.recicladorForm.controls;
  }

  onSubmit() {

    const data: Reciclador = {
      accion            : ACCIONES_POST_GET_SISTEMA.INSERT,
      nombre            : this.f.nombre.value,
      apellido          : this.f.apellido.value,
      telefono          : this.f.telefono.value,      
      rol               : CONFIG_GENERAL_SISTEMA.RECICLADOR_BASE,
      app               : 'APP'
    };    

    // const data: Reciclador = {
    //   accion            : ACCIONES_POST_GET_SISTEMA.INSERT,
    //   ruc_ci            : this.f.ruc_ci.value,
    //   username          : this.f.username.value,
    //   email             : this.f.correo_electronico.value,
    //   password          : this.f.contrasenia.value,
    //   edad              : this.f.edad.value,
    //   telefono          : this.f.telefono.value,
    //   // id_sector         : this.f.id_sector.value,
    //   direccion         : this.f.direccion.value,
    //   asociado          : this.f.asociado.value,
    //   estado            : false,
    //   productos         : this.f.productos.value,
    //   dias              : this.f.dias.value,
    //   direcciones       : this.f.direcciones.value,
    //   rol               : CONFIG_GENERAL_SISTEMA.RECICLADOR_BASE
    // };

    // data.productos = data.productos.filter( res => res.selected);
    // data.dias = data.dias.filter( res => res.selected );

    this.loadingSrv.presentLoading();

    this.recicladorSubs = this.dataSrv.setReciclador(data)
    .subscribe( (res: Respuesta) => {
      this.loadingSrv.hideLoading();
      this.showModalInfo();
      this.recicladorForm.reset();
      // this.mensajeSrv.mensajeAlerta( res._mensaje, true );
    });


  }

  async showModalInfo() {
    const modal = await this.modalController.create({
      component: InfoRegistrosComponent,
      backdropDismiss: false
    });
    return await modal.present();
  }

}
