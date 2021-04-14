import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { ModalController } from '@ionic/angular';
import { CantidadProdComponent } from '../cantidad-prod/cantidad-prod.component';

@Component({
  selector: 'app-productoseleccion',
  templateUrl: './productoseleccion.component.html',
  styleUrls: ['./productoseleccion.component.scss'],
})
export class ProductoseleccionComponent implements OnInit {

  arrayProductos: FormArray;
  @Input() form: FormGroup;
  modal: HTMLIonModalElement;

  constructor(
    private formBuilder: FormBuilder,
    private catalogoSrv: CatalogoService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.arrayProductos = this.form.get('productos') as FormArray;

    this.catalogoSrv.listaProductos()
    .subscribe( res => {
      res.forEach( ( response ) => {
        this.arrayProductos.push(
          this.formBuilder.group({
            id_producto: response.id_producto,
            selected: Number(response.selected),
            direccion_logo: response.direccion_logo,
            descripcion: response.descripcion,
            cantidad: 0
          })
        );
      });
    });

  }

  activeButton( index: number ) {
    const data = this.arrayProductos.controls[index] as FormGroup;
    const value = data.controls.selected.value;
    data.controls.selected.setValue( !value );
    this.showModalCantidad( index );
  }

  async showModalCantidad( index: number ) {
    this.modal = await this.modalController.create({
      component: CantidadProdComponent,
      backdropDismiss: false,
      componentProps: { index }
    });

    this.modal.onDidDismiss().then( (data: any) => {
      data = data.data;
      const datos = this.arrayProductos.controls[data.index] as FormGroup;
      datos.controls.cantidad.setValue( data.cantidad );

      if ( data.cantidad === 0 ) {
        datos.controls.selected.setValue( false );
      }
    });

    return await this.modal.present();
  }

}
