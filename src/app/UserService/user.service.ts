import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user = signal<{ firstname: string; pass: string } | null>(null);
  setUser(firstname: string, pass: string) {
    
  }

  get user() {
    return this._user;
  }
}
