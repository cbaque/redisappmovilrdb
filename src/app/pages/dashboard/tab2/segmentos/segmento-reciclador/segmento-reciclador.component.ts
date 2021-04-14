import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecicladorPorFecha, ListaRecicladores } from 'src/app/interfaces/reciclador';
import { RecicladorService } from 'src/app/services/reciclador.service';
import { forkJoin, pipe, Subscription } from 'rxjs';
import { DireccionService } from 'src/app/services/direccion.service';
import { Direcciones, DireccionRecicladores } from 'src/app/interfaces/direccion';
import { ModalController, AlertController } from '@ionic/angular';
import { HorarioReciclador } from '../../../../../interfaces/reciclador';
import { MensajeService } from '../../../../../services/mensaje.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-segmento-reciclador',
  templateUrl: './segmento-reciclador.component.html',
  styleUrls: ['./segmento-reciclador.component.scss'],
})
export class SegmentoRecicladorComponent implements OnInit, OnDestroy {
  // variables generales
  subs: Subscription[] = [];
  @Input() form: FormGroup;

  //direccion seleccionada de la pantalla inicial
  selectDireccionInicialConsumidor: number = 0;
  nombreDireccionConsumidortemp: string = '';

  // listado de direcciones del consumidor | usuario logoneado
  listaDireccionesConsumidor: Direcciones[] = [];

  // lista de recicladores
  listaRecicladores: DireccionRecicladores[] = [];

  // lista horarios disponible del reciclador
  listaHorarioRecicladores: HorarioReciclador[] = [];
  activaListaHorarios = false
  biografia: any = null;
  // fin de variables generales

  constructor(
    private dataSrv: RecicladorService,
    private direccionSrv: DireccionService,
    public modalController: ModalController,
    private smsSrv: MensajeService,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    //seteamos variable de direccion escogida en pantalla previa : 0
    this.selectDireccionInicialConsumidor = ( this.form.get('direccion').value  ? this.form.get('direccion').value : 0 );

    // buscamos direcciones del consumidor | usuario logoneado
    let direccionesConsumidor = this.direccionSrv.getDireccion();
    // buscamos recicladores en base a la direccion seleccionada, caso contrario no mostrar nada
    let recicladores = this.direccionSrv.getDireccionRecicladoresMapa( Number( this.selectDireccionInicialConsumidor ) );
    this.subs.push( forkJoin( [ direccionesConsumidor, recicladores ] )
    .subscribe(( data: any ) => {
      this.listaDireccionesConsumidor = data[0];
      this.listaRecicladores = data[1];
      this.setValueDireccionInicialConsumidor();
    }));
  }

  // Metodos del combo de direccion del consumidor
  changeDireccionConsumidor( ev: any ): void {
    this.selectDireccionInicialConsumidor =  ev.detail.value;
    this.form.get('direccion').patchValue( this.selectDireccionInicialConsumidor );

    if ( this.selectDireccionInicialConsumidor ) {
      this.setValueDireccionInicialConsumidor();    
      
      // buscamos nuevos recicladores en base a la seleccion de la direccion actual
      this.form.get('reciclador').patchValue( '' );
      this.listaHorarioRecicladores = [];
      this.biografia = null;

      let recicladores = this.direccionSrv.getDireccionRecicladoresMapa( Number( this.selectDireccionInicialConsumidor ) );
      this.subs.push( 
        recicladores
        .subscribe( ( data: any ) => { 
          this.listaRecicladores = data;
        }) 
      );
    }
  }

  setValueDireccionInicialConsumidor(): void {
    const tmp =
    this.listaDireccionesConsumidor
    .filter( data => Number( data.id_direccion_usuario ) === Number ( this.selectDireccionInicialConsumidor ) );

    if ( tmp.length )
      this.nombreDireccionConsumidortemp = tmp[0].nombre_direccion;
  }
  // Fin metodo del combo de direccion del consumidor

  // Metodos del combo de reciclador
  getHorariosDisponibleReciclador( ev: any ): void {
    let data = ev.detail.value;
    if ( data ) {
      this.setBiografiaReciclador( data );

      this.activaListaHorarios = true;
      this.dataSrv.getDataHorariosReciclador(  Number ( data ) )
      .pipe(finalize(() => this.activaListaHorarios = false ))
      .subscribe( ( res: HorarioReciclador[] ) => {
        this.listaHorarioRecicladores = res;
      })
    }
  }

  setBiografiaReciclador( id: any ) {
    this.biografia =
    this.listaRecicladores
    .filter( data => Number( data.id_usuario ) === Number ( id ) );    
  }
  // Fin de metodos del combo de reciclador

  // Metodos seleccionar fecha
  async changeFechaRecolector( ev:any ) {
    const fecha = this.form.get('dia').value;
    const dia = new Date( fecha ).getDay();

    let validar = this.listaHorarioRecicladores.filter( (res: HorarioReciclador) => Number( res.valor ) === Number( dia ))
    if ( !validar.length ) {
      this.form.get('dia').setValue( '' );
      this.smsSrv.mensajeAlerta('Verificar Fecha de Reciclador', false);
      return false;
    }
  }
  // Fin meetodo de seleccionar fecha

  ngOnDestroy() {
    for (const index in this.subs) {
      this.subs[index].unsubscribe();
    }
  }

}
