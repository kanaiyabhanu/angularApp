import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'content',
})
export class customPipe implements PipeTransform {
  transform(val, arg) {
    if (!arg) {
      return val;
    }
    if (val.length > arg) {
      return val.substring(0, arg) + '...';
    }
  }
}
