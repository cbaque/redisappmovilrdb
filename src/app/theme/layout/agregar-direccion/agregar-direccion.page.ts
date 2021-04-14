import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Direcciones } from 'src/app/interfaces/direccion';
import { DataService } from 'src/app/services/data.service';
import { DireccionService } from 'src/app/services/direccion.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { AgregarDireccionNuevaComponent } from '../agregar-direccion-nueva/agregar-direccion-nueva.component';

@Component({
  selector: 'app-agregar-direccion',
  templateUrl: './agregar-direccion.page.html',
  styleUrls: ['./agregar-direccion.page.scss'],
})
export class AgregarDireccionPage implements OnInit {

  direccionForm: FormGroup;
  public direcciones: Direcciones[] = [];
  
  constructor(
    public viewCtrl: ModalController,
    private formBuilder: FormBuilder,
    private mensajeSrv: MensajeService,
    public modalController: ModalController,
    private dataSrv: DireccionService,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getItems();
    this.direccionForm = this.createFormDireccion();
  }

  createFormDireccion(): FormGroup {
    return this.formBuilder.group({
      direccion:  new FormControl(''),
    });
  }

  getItems() {
    this.dataSrv.getDireccion().subscribe(
      (res: Direcciones[]) => {
        this.direcciones = res;
        // console.log( this.direcciones );
      });
  }

  cancelDireccion() {
    this.router.navigate(['/dashboard/grafico']);
  }

  nextDireccion() {
    this.dataService.setData('id', { direccion: this.direccionForm });
    this.router.navigateByUrl('/dashboard/pedir/id');
  }

  // closeModal( flag: boolean ) {
  //   this.viewCtrl.dismiss( this.direccionForm );
  // }

  // createFormDirecciones() {
  //   return this.formBuilder.group({
  //     direccion:                new FormControl(''),
  //     latitude:                 new FormControl(''),
  //     longitude:                new FormControl(''),
  //   });
  // }

  async showModalNuevaDireccion() {

    const modal = await this.modalController.create({
      component: AgregarDireccionNuevaComponent,
      backdropDismiss: false
    });

    // this.modal.onDidDismiss().then( (data: any) => {
    //   data = data.data.value;
    //   if ( !data.cancelar ) {
    //     this.router.navigate(['/dashboard/grafico']);
    //   } else {
    //     this.reciclarForm.get('direccion').setValue( ( data.direccion ) ? data.direccion : '' );
    //     const direcionArray = this.reciclarForm.get('direccionNueva') as FormArray;
    //     direcionArray.push(
    //       this.formBuilder.group({
    //         direccion: data.direccionNueva[0].direccion,
    //         latitude: data.direccionNueva[0].latitude,
    //         longitude: data.direccionNueva[0].longitude,
    //       })
    //     );
    //   }
    // });

    return await modal.present();
  }

}
