import { Pipe, PipeTransform } from '@angular/core';
import { courses } from '../app.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: courses[], args: string): courses[] {
    return value.filter(value => value.courseName.indexOf(args) !> -1 || value.courseType.indexOf(args) !>-1);
  }

}
