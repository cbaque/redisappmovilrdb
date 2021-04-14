import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-que-reciclar',
  templateUrl: './info-que-reciclar.component.html',
  styleUrls: ['./info-que-reciclar.component.scss'],
})
export class InfoQueReciclarComponent implements OnInit {

  arrayImagesNestle = [
    'svetty.png',
    'ricacao.png',
    'nido.png',
    'nescafe.png',
    'natura.png',
    'gerber.png',
    'ecuateur.png',
    'dolce.png',
    'dogchow.png',
    'cerealesnestle.png',
    'maggi.png',
    'lalechera.png',
    'kitkat.png',
    'nestea.png',
    'amor.png',
  ];

  arrayPlasticos =
  [
    {
      nombre: 'Botellas desechables de bebidas, aguas, jugos',
      status: true
    },
    {
      nombre: 'Bandejas de tortas.',
      status: true
    },
    {
      nombre: 'Bolsas de basura',
      status: true
    },
    {
      nombre: 'Bidones',
      status: true
    },
    {
      nombre: 'Botellas',
      status: true
    },
    {
      nombre: 'Bolsas de empaques plásticos',
      status: true
    },
    {
      nombre: 'Envases de aceite o con residuos orgánicos',
      status: false
    },
  ];

  arrayTetrapack =
  [
    {
      nombre: 'Compuesto de plástico, metal y cartón. Debe estar limpio',
      status: true
    },
    {
      nombre: 'Con residuos orgánicos',
      status: false
    }
  ];

  arrayVidrio =
  [
    {
      nombre: 'Vidrio café, azul, verde, transparente.',
      status: true
    },
    {
      nombre: 'Fibra de vidrio',
      status: false
    },
    {
      nombre: 'Focos y tubos fluorescentes',
      status: false
    },
    {
      nombre: 'Espejos',
      status: false
    },
    {
      nombre: 'Vidrio templado',
      status: false
    },
  ];

  arrayPapel =
  [
    {
      nombre: 'Craft con o sin impresión, color café, papel ecológico.',
      status: true
    },
    {
      nombre: 'Bond blanco mate',
      status: true
    },
    {
      nombre: 'Papel periódico',
      status: true
    },
    {
      nombre: 'Papel couché brillante',
      status: true
    },
    {
      nombre: 'Papel higiénico, servilletas.',
      status: false
    },
  ];

  arrayCarton =
  [
    {
      nombre: 'Corrugado',
      status: true
    },
    {
      nombre: 'Cartón prensado rígido',
      status: true
    },
    {
      nombre: 'Cartón plastificado o encerado',
      status: false
    },
    {
      nombre: 'Cartón con residuos orgánicos',
      status: false
    },
  ];

  arrayMetal =
  [
    {
      nombre: 'Corrugado',
      status: true
    },
    {
      nombre: 'Cartón prensado rígido',
      status: true
    },
    {
      nombre: 'Cartón plastificado o encerado',
      status: false
    },
    {
      nombre: 'Cartón con residuos orgánicos',
      status: false
    },
  ];

  constructor(
    public viewCtrl: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(): void {

    this.viewCtrl.dismiss();
  }

}
