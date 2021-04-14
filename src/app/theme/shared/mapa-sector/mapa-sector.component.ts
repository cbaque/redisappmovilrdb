import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {   } from 'googlemaps';
import { Platform } from '@ionic/angular';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx/';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mapa-sector',
  templateUrl: './mapa-sector.component.html',
  styleUrls: ['./mapa-sector.component.scss'],
})
export class MapaSectorComponent implements OnInit {

  @ViewChild('mapSector', { static: true }) divMap: ElementRef;
  @Input() form: FormGroup;
  Listadireciones: FormArray;

  map: google.maps.Map;
  drawingManager: google.maps.drawing.DrawingManager;
  drawingOptions: google.maps.drawing.DrawingManagerOptions;

  drawingControlOptions: google.maps.drawing.DrawingControlOptions;

  constructor(
    private geolocation: Geolocation,
    public platform: Platform,
    private formBuilder: FormBuilder,
  ) {
    platform.ready().then(() => {
      this.geolocation.getCurrentPosition( { enableHighAccuracy: true, maximumAge: 0 } ).then((resp) => {

        this.loadMap(resp.coords.latitude, resp.coords.longitude);

       }).catch((error) => {
         console.log('Error getting location', error);
       });
    });
   }

  ngOnInit() {
    this.Listadireciones = this.form.get('direcciones') as FormArray;
  }

  async loadMap( latitude: number, longitude: number) {

    const latLng = new google.maps.LatLng(latitude, longitude);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);

    this.drawingOptions = {
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_CENTER,
        drawingModes: [ google.maps.drawing.OverlayType.POLYGON ]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    this.drawingManager = new google.maps.drawing.DrawingManager(this.drawingOptions);


    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {

      if (event.type === google.maps.drawing.OverlayType.POLYGON) {

        event.overlay.getPath().getArray().forEach(element => {
          this.Listadireciones.push(
            this.formBuilder.group({
              // direccion: tmp,
              latitude: element.lat(),
              longitude: element.lng()
            })
          );
          // console.log(element.lat(), ',' , element.lng());
        });
      }
    });



  }

}
