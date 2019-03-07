import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {
  save(name: string, value: any): any {
    localStorage.setItem(name, JSON.stringify(value));
  }

  get(name: string): any {
    const value = localStorage.getItem(name);

    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  remove(name: string): any {
    localStorage.removeItem(name);
  }

  constructor() { }
}
