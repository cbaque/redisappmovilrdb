import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-registros',
  templateUrl: './info-registros.component.html',
  styleUrls: ['./info-registros.component.scss'],
})
export class InfoRegistrosComponent implements OnInit {

  constructor(
    public viewCtrl: ModalController,
    private route: Router,
  ) { }

  ngOnInit() {}

  closeModal() {
    this.viewCtrl.dismiss();
    this.route.navigate(['/auth/signin']);
  }

}
