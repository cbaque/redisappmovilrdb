import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  arrayProductos: FormArray;
  @Input() form: FormGroup;
  slideOpts = {
    // slidesPerView: 5,
    slidesPerView: 3,
    spaceBetween: 10,

  };

  constructor(
    private formBuilder: FormBuilder,
    private catalogoSrv: CatalogoService,
  ) { }

  ngOnInit() {
    this.arrayProductos = this.form.get('productos') as FormArray;

    this.catalogoSrv.listaProductos()
    .subscribe( res => {
      res.forEach( ( response ) => {
        this.arrayProductos.push(
          this.formBuilder.group({
            id_producto: response.id_producto,
            selected: Boolean(response.selected),
            direccion_logo: response.direccion_logo,
            descripcion: response.descripcion
          })
        );
      });
    });
  }

  activeButton( index: number ) {
    const data = this.arrayProductos.controls[index] as FormGroup;
    const value = data.controls.selected.value;
    data.controls.selected.setValue( !value );
  }

}
