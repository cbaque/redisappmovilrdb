import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-usuarios',
  templateUrl: './logo-usuarios.component.html',
  styleUrls: ['./logo-usuarios.component.scss'],
})
export class LogoUsuariosComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {}

}
