import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'userDisplayName'
})
export class UserDisplayNamePipe implements PipeTransform {

  transform(user: User): any {
    if (!user) {
      return '';
    }

    return `${user.person.name} ${user.person.surname}`;
  }

}
