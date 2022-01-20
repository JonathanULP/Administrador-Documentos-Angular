import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor ( private domSanitizer: DomSanitizer){}

  transform(url:any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(String(url));
  }
}
