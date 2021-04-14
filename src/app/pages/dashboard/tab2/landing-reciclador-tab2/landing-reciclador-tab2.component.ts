import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-reciclador-tab2',
  templateUrl: './landing-reciclador-tab2.component.html',
  styleUrls: ['./landing-reciclador-tab2.component.scss'],
})
export class LandingRecicladorTab2Component implements OnInit {

  @Input() data: number;

  constructor() { }

  ngOnInit() {
    // console.log( this.data );
  }

}
