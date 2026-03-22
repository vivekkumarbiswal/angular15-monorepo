import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private role: string | null = null;

  login(role: string) {
    this.role = role;
  }

  getRole(): string | null {
    return this.role;
  }

  isLoggedIn(): boolean {
    return this.role !== null;
  }

  logout() {
    this.role = null;
  }
}
