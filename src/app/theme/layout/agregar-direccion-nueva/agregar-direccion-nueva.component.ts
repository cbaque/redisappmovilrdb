import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Data } from 'src/app/interfaces/auth';
import { DireccionService } from 'src/app/services/direccion.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { LoadingService } from 'src/app/services/utils/loading.service';

@Component({
  selector: 'app-agregar-direccion-nueva',
  templateUrl: './agregar-direccion-nueva.component.html',
  styleUrls: ['./agregar-direccion-nueva.component.scss'],
})
export class AgregarDireccionNuevaComponent implements OnInit {

  direccionForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private dataSrv: DireccionService,
    private loadingSrv: LoadingService,
    private mensajeSrv: MensajeService,
  ) { }

  ngOnInit() {
    this.direccionForm = this.createFormDirecciones();
  }

  createFormDirecciones() {
    return this.formBuilder.group({
      direccion:  new FormControl({value: '', disabled: true}),
      latitude:   new FormControl(''),
      longitude:  new FormControl(''),
      referencia: new FormControl(''),
      nombre:     new FormControl('', Validators.required ),
    });
  }

  get f() {
    return this.direccionForm.controls;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async onSubmit() {
    const data = this.direccionForm.getRawValue();

    this.loadingSrv.presentLoading();
    this.dataSrv.setDireccion( data )
    .pipe( finalize( () => this.loadingSrv.hideLoading() ) )
    .subscribe( (res: any) => {
      this.loadingSrv.hideLoading();
      this.direccionForm.reset();
      this.mensajeSrv.mensaje(res._mensaje);
      this.modalController.dismiss();
    });
  }

}
