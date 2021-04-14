import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(
    public viewCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
