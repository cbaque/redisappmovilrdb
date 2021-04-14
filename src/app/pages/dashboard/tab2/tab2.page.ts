import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { RecicladorService } from 'src/app/services/reciclador.service';
import { ACCIONES_POST_GET_SISTEMA } from 'src/app/interfaces/config';
import { Transaccion } from 'src/app/interfaces/transaccion';
import { MensajeService } from 'src/app/services/mensaje.service';
import { LoadingService } from 'src/app/services/utils/loading.service';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { InfoPostSaveComponent } from './info-post-save/info-post-save.component';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { AgendaReciclador } from 'src/app/interfaces/reciclador';
import { AgregarDireccionPage } from 'src/app/theme/layout/agregar-direccion/agregar-direccion.page';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  arrayProductos: FormArray;
  reciclarForm: FormGroup;
  usuario: Usuario = {};
  agenda: AgendaReciclador[] = [];
  modal: HTMLIonModalElement;

  constructor(
    private formBuilder: FormBuilder,
    private dataSrv: RecicladorService,
    private mensajeSrv: MensajeService,
    private loadingSrv: LoadingService,
    public modalController: ModalController,
    private usrServ: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController

  ) {

  }

  ngOnInit() {

    this.reciclarForm = this.createdashConsumidorForm();
    const dataParameter: { direccion } = this.route.snapshot.data.special;
    if ( !dataParameter ) {
      this.router.navigate(['dashboard/']);
    }else {
      const direccion: FormGroup = dataParameter.direccion;
      this.reciclarForm.get('direccion').setValue( direccion.value.direccion );
      this.arrayProductos = this.reciclarForm.get('productos') as FormArray;
      this.usrServ.getUsuario().then((res) => this.usuario = res);
    }
  }

  createdashConsumidorForm() {
    return this.formBuilder.group({
      productos:            this.formBuilder.array([]),
      dia:                  new FormControl('', [ Validators.required ] ),
      tipo_envio:           new FormControl(false),
      hora:                 new FormControl(''),
      reciclador:           new FormControl('', [ Validators.required]),
      total:                new FormControl(0),
      listaselec:           ['reciclador'],
      direccion:            new FormControl('', [ Validators.required]),
      fotos:                this.formBuilder.array([])
    });
  }

  get f() {
    return this.reciclarForm.controls;
  }


  onSubmit() {

    const data: Transaccion = {
      accion            : ACCIONES_POST_GET_SISTEMA.INSERT,
      reciclador        : Number ( this.f.reciclador.value ),
      tipo_envio        : this.f.tipo_envio.value,
      total             : this.f.total.value,
      fecha             : this.f.dia.value,
      hora              : this.f.hora.value,
      productos         : this.f.productos.value,
      direccion         : Number ( this.f.direccion.value ),
      fotos             : this.f.fotos.value,
    };

    data.productos = data.productos.filter( res => res.selected);
    console.log( data );
    // return;

    this.loadingSrv.presentLoading();

    this.dataSrv.setTransaccion (  data )
    .pipe(finalize(() => this.loadingSrv.hideLoading() ))
    .subscribe ( res =>  {
      this.showModalInfo();
      this.navCtrl.navigateRoot(`/dashboard/pedir`);
    });

  }

  async showModalInfo() {
    const modal = await this.modalController.create({
      component: InfoPostSaveComponent,
      backdropDismiss: false
    });
    return await modal.present();
  }

}
