import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyText',
})
export class EmptyTextPipe implements PipeTransform {
  transform(value: string | null): unknown {
    return value ?? '-';
  }
}
