import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { accionCatalogo } from 'src/app/interfaces/catalogo';
import { ModalController } from '@ionic/angular';
import { HorarioComponent } from './horario/horario.component';
import { Horario } from 'src/app/interfaces/horario';

@Component({
  selector: 'app-dias-recoleccion',
  templateUrl: './dias-recoleccion.component.html',
  styleUrls: ['./dias-recoleccion.component.scss'],
})
export class DiasRecoleccionComponent implements OnInit {

  arrayDias: FormArray;
  @Input() form: FormGroup;
  modal: HTMLIonModalElement;

  constructor(
    private catalogoSrv: CatalogoService,
    private formBuilder: FormBuilder,
    public modalController: ModalController
  ) { }

  ngOnInit() {

    this.arrayDias = this.form.get('dias') as FormArray;

    this.catalogoSrv.listaDiasRecoleccion(accionCatalogo.DIA_RECOLECCION)
    .subscribe( res => {
      res.forEach(  response => {
        this.arrayDias.push(
          this.formBuilder.group({
            id: response.id,
            nombre: response.nombre,
            desde: null,
            hasta: null,
            selected: false,
          })
        );
      });
    });

  }

  // tslint:disable-next-line: variable-name
  async showModalHorario( index: number ) {
    this.modal = await this.modalController.create({
      component: HorarioComponent,
      componentProps: { index }
    });

    this.modal.onDidDismiss().then( (data: any) => {
      data = data.data;
      const datos = this.arrayDias.controls[data.index] as FormGroup;

      datos.controls.desde.setValue( data.horaDesde );
      datos.controls.hasta.setValue( data.horaHasta );

    });

    return await this.modal.present();
  }

  activeButtonDias( index: number ) {
    const data = this.arrayDias.controls[index] as FormGroup;
    const value = data.controls.selected.value;
    data.controls.selected.setValue( !value );
  }

}
