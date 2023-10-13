import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUsers, DeleteUser, AddUser } from './ngxs/users/users.actions';
import User from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;

  constructor(private store: Store) {
    this.isLoading = true;
    this.store.dispatch(new GetUsers()).subscribe(() => {
      this.isLoading = false;
    });
  }

  deleteUser(userId: string) {
    this.store.dispatch(new DeleteUser(userId));
  }

  addUser(user: User) {
    this.store.dispatch(new AddUser(user));
  }
}
