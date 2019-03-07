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
      this.localStorageService.save('user', formData);
      setTimeout(() => {
        resolve({status: 'ok'});
      }, 400);
    })
  }
}
