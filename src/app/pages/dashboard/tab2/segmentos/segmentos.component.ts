import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-segmentos',
  templateUrl: './segmentos.component.html',
  styleUrls: ['./segmentos.component.scss'],
})
export class SegmentosComponent implements OnInit {

  @Input() form: FormGroup;
  categorias = [ 'reciclador', 'punto circular' ];

  constructor() { }

  ngOnInit() {
  }

}
