import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx/';
import {   } from 'googlemaps';
import { Platform } from '@ionic/angular';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

export interface Direcciones {
  direccion: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @ViewChild('map', { static: true }) divMap: ElementRef;
  @Input() form: FormGroup;
  Listadireciones: FormArray = new FormArray([]);

  map: google.maps.Map;
  marker: google.maps.Marker;
  // Listadireciones: any = [];

  constructor(
    private geolocation: Geolocation,
    public platform: Platform,
    private formBuilder: FormBuilder,
  ) {
    platform.ready().then(() => {

      this.geolocation.getCurrentPosition( { enableHighAccuracy: true, maximumAge: 0 } ).then((resp) => {

        // 6.2559812,-75.5712194
        this.loadMap(resp.coords.latitude, resp.coords.longitude);
        // this.loadMap(-2.1530278,-79.6003554);

        google.maps.event.addListener( this.marker, 'dragend', async () => {

          const tmp = (await this.getAddress( this.marker.getPosition() )).toString();
          this.setDataForm( tmp, this.marker.getPosition().lat(), this.marker.getPosition().lng() );
          // this.Listadireciones = new FormArray([]);
          // this.Listadireciones.push(
          //   this.formBuilder.group({
          //     direccion: tmp,
          //     latitude: this.marker.getPosition().lat(),
          //     longitude: this.marker.getPosition().lng(),
          //     active: false
          //   })
          // );

        });


       }).catch((error) => {
         console.log('Error getting location', error);
       });
    });

  }
  setDataForm( direccion: string, latitude: number, longitude: number ) {
    this.form.get('direccion').setValue( direccion );
    this.form.get('latitude').setValue( latitude );
    this.form.get('longitude').setValue( longitude );
  }

  ngOnInit() {

    // this.Listadireciones = this.form.get('direccionNueva') as FormArray;

  }

  async getAddress(location: any): Promise<string> {

    return new Promise( (resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      // location: this.marker.getPosition() 
      geocoder.geocode( { location }, ( results, status ) => {

        if (status === google.maps.GeocoderStatus.OK) {
          const address = results[0].formatted_address;
          resolve( address );
        } else {
          reject( status );
        }
      });

    });
  }

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

    const tmp = (await this.getAddress( this.marker.getPosition() )).toString();
    this.setDataForm( tmp, latitude, longitude );

    // this.Listadireciones.push(
    //   this.formBuilder.group({
    //     direccion: tmp,
    //     latitude,
    //     longitude,
    //     active: false
    //   })
    // );

  }

  deleteDireccion( index: number ) {

    this.Listadireciones.controls.splice(index, 1);

  }


}
