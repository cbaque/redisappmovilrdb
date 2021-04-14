import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { LoadingService } from 'src/app/services/utils/loading.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { Observable, Subscription } from 'rxjs';
import { Catalogos, accionCatalogo } from 'src/app/interfaces/catalogo';
import { ValidacionRegistrosService, MustMatch } from 'src/app/helpers/validacion-registros.service';
import { Recuperador } from 'src/app/interfaces/recuperador';
import { ACCIONES_POST_GET_SISTEMA, CONFIG_GENERAL_SISTEMA } from 'src/app/interfaces/config';
import { Router } from '@angular/router';
import { RecuperadorService } from 'src/app/services/recuperador.service';
import { Respuesta } from 'src/app/interfaces/auth';
import { ModalController } from '@ionic/angular';
import { InfoRegistrosComponent } from 'src/app/theme/shared/info-registros/info-registros.component';

@Component({
  selector: 'app-recuperador',
  templateUrl: './recuperador.component.html',
  styleUrls: ['./recuperador.component.scss'],
})
export class RecuperadorComponent implements OnInit, OnDestroy {

  recuperadorForm: FormGroup;
  arrayProductos: FormArray;
  arrayDias: FormArray;
  lisTipoPersona: Observable<Catalogos[]>;
  arrayDirecciones: FormArray;
  recuperadorSubs: Subscription;

  title = 'Compro materiales reciclables para volverlos a convertir en materias primas.';
  subtitle = 'Registro de Centro de Acopio o Recuperador';

  constructor(
    private catalogoSrv: CatalogoService,
    private formBuilder: FormBuilder,
    private loadingSrv: LoadingService,
    private mensajeSrv: MensajeService,
    public validator: ValidacionRegistrosService,
    private dataSrv: RecuperadorService,
    private route: Router,
    public modalController: ModalController


  ) { }

  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    (this.recuperadorSubs) ? this.recuperadorSubs.unsubscribe() : '';
  }

  ngOnInit() {

    this.recuperadorForm = this.createRecuperadorForm();
    this.arrayProductos = this.recuperadorForm.get('productos') as FormArray;
    this.arrayDias = this.recuperadorForm.get('dias') as FormArray;
    this.lisTipoPersona = this.catalogoSrv.listaTipoPersona(accionCatalogo.TIPO_PERSONA);
    this.arrayDirecciones = this.recuperadorForm.get('direcciones') as FormArray;

  }

  createRecuperadorForm() {
    return this.formBuilder.group({
      nombre:     new FormControl('', [ Validators.required] ),
      apellido:   new FormControl('', [ Validators.required] ),
      telefono:   new FormControl('', [ Validators.required] ),
    });
  }


  createRecuperadorForm2() {
    return this.formBuilder.group({
      tipo_persona:         new FormControl('', [Validators.required]),
      ruc_ci:               new FormControl('', [Validators.required]),
      username:             new FormControl('', [ Validators.required, Validators.minLength(6) ] ),
      correo_electronico:   new FormControl('', [ Validators.required, Validators.email ]),
      contrasenia:          new FormControl('', [ Validators.required, Validators.minLength(6) ] ),
      confirmPassword:      new FormControl('', [ Validators.required] ),
      // edad:                 new FormControl(''),
      inicio_actividades:   new FormControl('', [Validators.required]),
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

  get f() {
    return this.recuperadorForm.controls;
  }


  onSubmit() {

    // const data: Recuperador = {
    //   accion            : ACCIONES_POST_GET_SISTEMA.INSERT,
    //   id_tipo_persona   : this.f.tipo_persona.value,
    //   ruc_ci            : this.f.ruc_ci.value,
    //   username          : this.f.username.value,
    //   email             : this.f.correo_electronico.value,
    //   password          : this.f.contrasenia.value,
    //   telefono          : this.f.telefono.value,
    //   direccion         : this.f.direccion.value,
    //   asociado          : this.f.asociado.value,
    //   estado            : false,
    //   productos         : this.f.productos.value,
    //   dias              : this.f.dias.value,
    //   direcciones       : this.f.direcciones.value,
    //   rol               : CONFIG_GENERAL_SISTEMA.RECUPERADOR
    // };

    const data: Recuperador = {
      accion            : ACCIONES_POST_GET_SISTEMA.INSERT,
      nombre            : this.f.nombre.value,
      apellido          : this.f.apellido.value,
      telefono          : this.f.telefono.value, 
      rol               : CONFIG_GENERAL_SISTEMA.RECUPERADOR
    };
      

    // data.productos = data.productos.filter( res => res.selected);
    // data.dias = data.dias.filter( res => res.selected );

    this.loadingSrv.presentLoading();

    this.recuperadorSubs = this.dataSrv.setRecuperador(data)
    .subscribe( (res: Respuesta) => {
      this.loadingSrv.hideLoading();
      this.showModalInfo();
      this.recuperadorForm.reset();
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
