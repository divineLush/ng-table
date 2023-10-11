import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/user');
  }

  addUser(user: User) {
    return this.http.post('/api/user', user);
  }
}
