import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa-buscqueda',
  templateUrl: './mapa-buscqueda.component.html',
  styleUrls: ['./mapa-buscqueda.component.scss'],
})
export class MapaBuscquedaComponent implements OnInit {

  @ViewChild('mapBusqueda', { static: true }) divMap: ElementRef;

  constructor() { }

  ngOnInit() {}

}
