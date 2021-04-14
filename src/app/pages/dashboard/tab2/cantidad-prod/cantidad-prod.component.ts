import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoCantidad } from 'src/app/interfaces/productos';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-cantidad-prod',
  templateUrl: './cantidad-prod.component.html',
  styleUrls: ['./cantidad-prod.component.scss'],
})
export class CantidadProdComponent implements OnInit {

  @Input() index: number;
  datos: ProductoCantidad;

  constructor(
    public viewCtrl: ModalController,
    private smsServ: MensajeService
  ) { }

  ngOnInit() {
    this.datos = { index : this.index, cantidad: 0 };
  }

  closeModal( flag: boolean ) {
    if ( !flag ) {
      this.datos.cantidad = 0;
    }

    if ( flag && this.datos.cantidad < 1 ) {
      this.smsServ.mensajeAlerta( 'Verifique Cantidad...', false );
      return false;
    }

    this.viewCtrl.dismiss( this.datos );
  }

  sumaCantidad() {
    this.datos.cantidad = this.datos.cantidad + 1;
  }

  restaCantidad() {
    this.datos.cantidad = this.datos.cantidad - 1;
  }

}
