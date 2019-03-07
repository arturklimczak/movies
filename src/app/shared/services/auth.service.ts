import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: LocalStorageServiceService) {

  }

  register(formData: any): any {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      users.push(formData);
      this.localStorageService.save('users', users);

      setTimeout(() => {
        resolve({status: 'ok'});
      }, 400);
    })
  }

  authenticate(formData: any) {
    return new Promise((res, rej) => {
      const users = this.localStorageService.get('users') || [];
      const status = users.find((user) => {
        return user.email === formData.email
          && user.password === formData.password;
      });

      if (status) {
        res({status: 'ok'});
      } else {
        rej({status: 'error'});
      }
    });
  }
}
