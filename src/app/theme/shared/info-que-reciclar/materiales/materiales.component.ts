import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.scss'],
})
export class MaterialesComponent implements OnInit {

  @Input() datos: any;
  @Input() title: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {}

}
