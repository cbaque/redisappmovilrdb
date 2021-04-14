import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imageSanitizer'
})
export class ImageSanitizerPipe implements PipeTransform {

  constructor(
    private domSanitizar: DomSanitizer
  ) {
  }

  transform( image: any ): any {
    return this.domSanitizar.bypassSecurityTrustUrl( image ) ;
  }

}
