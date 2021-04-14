import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-post-save',
  templateUrl: './info-post-save.component.html',
  styleUrls: ['./info-post-save.component.scss'],
})
export class InfoPostSaveComponent implements OnInit {

  constructor(
    public viewCtrl: ModalController,
    private route: Router,
  ) { }

  ngOnInit() {}

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
