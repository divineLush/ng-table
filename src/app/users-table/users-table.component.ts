import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'age', 'gender', 'actions'];

  users$: Observable<any>;

  constructor(private store: Store) {
    this.users$ = this.store.select(state => state.users.users);
  }
}
