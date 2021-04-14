import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Horario } from 'src/app/interfaces/horario';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  @Input() index: number;
  Datos: Horario;

  constructor(
    public viewCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.Datos = { index : this.index, horaDesde: '00:00', horaHasta: '23:59' };
  }

  // closeModal() {

  //   this.viewCtrl.dismiss( this.Datos );
  // }


  closeModal( flag: boolean ) {
    if ( !flag ) {
      this.Datos.horaDesde = '';
      this.Datos.horaHasta = '';
    }

    this.viewCtrl.dismiss( this.Datos );
  }

}
