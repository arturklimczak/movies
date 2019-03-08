import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service.service';
import { Status } from '../interfaces/status';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: LocalStorageServiceService) {

  }

  register(formData: any): Promise<Status> {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      users.push(formData);
      this.localStorageService.save('users', users);

      setTimeout(() => {
        resolve({status: 'ok'});
      }, 400);
    })
  }

  authenticate(formData: any): Promise<Status> {
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

  saveLoggedUser(user: any): Promise<Status> {
    return new Promise((resolve, rej) => {
      this.localStorageService.save('logged-user', user.email);
      setTimeout(() => {
        resolve({status: 'ok'});
      }, 200);
    });
  }

  isLoggedUser(): Promise<Status> {
    return new Promise((res, rej) => {
      const status = this.localStorageService.get('logged-user');
      if (status) {
        setTimeout(() => {
          res({status: 'ok'});
        }, 200);
      } else {
        setTimeout(() => {
          rej({status: 'err'});
        }, 200);
      }
    });
  }

  getUserByEmail(userEmail: string): Promise<User> {
    return new Promise((res, rej) => {
    const users = this.localStorageService.get('users') || [];
      const foundUser = users.find((user) => {
        return user.email === userEmail
      });

      if (foundUser) {
        res(foundUser);
      } else {
        rej(null);
      }
    });
  }

  getLoggedUserName(): Promise<User> {
    return new Promise((res, rej) => {
      const loggedUser = this.localStorageService.get('logged-user');

      if (loggedUser) {
        this.getUserByEmail(loggedUser)
          .then((user) => {
            setTimeout(res, 200, user);
          })
      } else {
        setTimeout(res, 200, `Unknown`);
      }
    });
  }

  destroySession(): any {
    return new Promise((res, rej) => {
      this.localStorageService.remove('logged-user');
      setTimeout(res, 200, {status: 'ok'})
    })
  }
}
