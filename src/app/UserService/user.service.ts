import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSignal = signal<{ firstname: string; pass: string } | null>(
    null
  );
  setUser(firstname: string, pass: string) {
    this.userSignal.set({ firstname , pass })
  }

  get user() {
    return this.userSignal.asReadonly();
  }
}
