import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TransaccionService } from 'src/app/services/transaccion.service';

// import { WebView } from '@ionic-native/ionic-webview/ngx';


// tslint:disable-next-line: prefer-const
declare var window: any;


@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss'],
})
export class DigitalComponent implements OnInit {

  tmpimages: string[] = [];
  @Input() form: FormGroup;
  arrayFotos: FormArray;

  constructor(
    private camera: Camera,
    private dataSrv: TransaccionService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.arrayFotos = this.form.get('fotos') as FormArray;
  }

  activaCamara() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    let tmpName = this.dataSrv.getNameImageTmp();
    
    this.camera.getPicture(options).then( ( imageData: string ) => {
    
      const img = (window as any).Ionic.WebView.convertFileSrc(imageData);
      this.dataSrv.subirImagen( imageData,  tmpName );

      this.tmpimages.push( img );
      
      this.arrayFotos.push( 
        this.formBuilder.group({
          photo: tmpName,
        }) 
      );

    }, (err) => {
     // Handle error
    });
  }

}
