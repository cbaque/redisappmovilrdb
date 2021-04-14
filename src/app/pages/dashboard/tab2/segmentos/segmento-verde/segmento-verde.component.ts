import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx/';
import {   } from 'googlemaps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-segmento-verde',
  templateUrl: './segmento-verde.component.html',
  styleUrls: ['./segmento-verde.component.scss'],
})
export class SegmentoVerdeComponent implements OnInit {

  @ViewChild('mapPuntoVerde', { static: true }) divMap: ElementRef;
  map: google.maps.Map;
  marker: google.maps.Marker;

  locations = [
    ['First Shoppe', -2.1644378, -79.8972354],
    ['Second Shoppe', -2.1647678, -79.8967436],
    ['Third Shoppe', -2.1647809, -79.8968047],
    ['Fourth Shoppe', -2.1672453, -79.8964398],
    ['Fifth Shoppe', -2.167423, -79.8962909]
  ];

  constructor(
    private geolocation: Geolocation,
    public platform: Platform,
  ) {
    platform.ready().then(() => {
      this.geolocation.getCurrentPosition( { enableHighAccuracy: true, maximumAge: 0 } ).then((resp) => {

        // 6.2559812,-75.5712194
        this.loadMap(resp.coords.latitude, resp.coords.longitude);

        this.setLocaciones();
        // this.loadMap(-2.1530278,-79.6003554);

        // google.maps.event.addListener( this.marker, 'dragend', async () => {

        // });
       }).catch((error) => {
        //  console.log('Error getting location', error);
       });
    });
  }

  ngOnInit() {}

  async loadMap( latitude: number, longitude: number) {

    const latLng = new google.maps.LatLng(latitude, longitude);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      title: 'Mi ubicacion'
    });

    // this.marker.setMap(this.map);

  }

  async setLocaciones() {

    const infowindow = new google.maps.InfoWindow();


    this.locations.forEach( (element, i) => {
      const titulo: string = String ( element[0] );

      this.placeMarket( element );

      // tslint:disable-next-line: only-arrow-functions
      google.maps.event.addListener(this.marker, 'click', ( function( marker ) {
        // tslint:disable-next-line: only-arrow-functions
        return function() {
            infowindow.setContent( titulo );
            infowindow.open(this.map, marker);
        };
      })( this.marker ));

    });
  }

  placeMarket( element: any ) {

    const lat = Number(element[1]);
    const lng = Number(element[2]);
    const titulo: string = String ( element[0] );

    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng( lat , lng),
      map: this.map,
      draggable: false,
      title: titulo,
      animation: google.maps.Animation.DROP,
    });
  }

}
