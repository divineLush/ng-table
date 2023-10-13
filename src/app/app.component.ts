import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUsers, DeleteUser } from './ngxs/users/users.actions';

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
}
