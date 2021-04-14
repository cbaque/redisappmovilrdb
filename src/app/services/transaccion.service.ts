import { Injectable } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { UsuarioService } from './usuario.service';
import { environment } from 'src/environments/environment';
import * as uniqid from 'uniqid';
export default uniqid;

const apiUlr = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(
    private fileSrv: FileTransfer,
    private usrSrv: UsuarioService
  ) { }

  subirImagen( img: string, imgTmp: string ) {

    const options: FileUploadOptions = {
      fileKey: 'image',
      fileName: imgTmp,
      headers: {
        'x-token': this.usrSrv.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileSrv.create();

    fileTransfer.upload( img, `${ apiUlr }/archivos/upload`, options )
      // .then( ( datos : any ) => {
      //   console.log( datos.response.data );
      // }).catch( err => {
      //   console.log('error en carga', err);
      // });

  }

  getNameImageTmp() {
    let tmpName = uniqid();
    return tmpName = tmpName+'.jpg';
}

}
