import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUsers, DeleteUser } from './ngxs/users/users.actions';
import { Observable } from 'rxjs';
import User from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;

  users$: Observable<User[]>

  constructor(private store: Store) {
    this.users$ = this.store.select((state) => state.users.users);

    this.isLoading = true;
    this.store.dispatch(new GetUsers()).subscribe(() => {
      this.isLoading = false;
    });
  }

  deleteUser(userId: string) {
    this.store.dispatch(new DeleteUser(userId));
  }
}
