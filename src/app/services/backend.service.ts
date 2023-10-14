import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private readonly API_BASE_URL = '/api/user';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.API_BASE_URL);
  }

  addUser(user: User) {
    return this.http.post(this.API_BASE_URL, user);
  }

  editUser(user: User) {
    const payload = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      age: user.age,
      gender: user.gender,
    };
    return this.http.put(`${this.API_BASE_URL}/${user._id}`, payload);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.API_BASE_URL}/${userId}`);
  }
}
