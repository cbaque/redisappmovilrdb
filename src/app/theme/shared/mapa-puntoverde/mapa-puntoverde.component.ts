import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx/';
import {   } from 'googlemaps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mapa-puntoverde',
  templateUrl: './mapa-puntoverde.component.html',
  styleUrls: ['./mapa-puntoverde.component.scss'],
})
export class MapaPuntoverdeComponent implements OnInit {

  @ViewChild('mapPuntoVerde', { static: true }) divMap: ElementRef;
  map: google.maps.Map;
  marker: google.maps.Marker;

  constructor(
    private geolocation: Geolocation,
    public platform: Platform,
  ) {
    platform.ready().then(() => {
      this.geolocation.getCurrentPosition( { enableHighAccuracy: true, maximumAge: 0 } ).then((resp) => {

        // 6.2559812,-75.5712194
        this.loadMap(resp.coords.latitude, resp.coords.longitude);
        // this.loadMap(-2.1530278,-79.6003554);

        // google.maps.event.addListener( this.marker, 'dragend', async () => {

        // });
       }).catch((error) => {
         console.log('Error getting location', error);
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
      draggable: true,
      animation: google.maps.Animation.DROP,
    });

    this.marker.setMap(this.map);

  }

}
