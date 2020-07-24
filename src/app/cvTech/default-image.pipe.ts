import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) {
      return 'cv.png';
    }
    return value;
  }

}
