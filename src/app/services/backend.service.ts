import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/user');
  }

  deleteUser(userId: string) {
    return this.http.delete(`/api/user/${userId}`);
  }
}
