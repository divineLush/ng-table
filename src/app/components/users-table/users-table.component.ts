import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngxs/store';
import { Observable, map } from 'rxjs';
import User from 'src/app/interfaces/user';
import { DeleteUser, EditUser } from 'src/app/ngxs/users/users.actions';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  readonly displayedColumns = [
    'firstname',
    'lastname',
    'email',
    'age',
    'gender',
    'actions',
  ];

  users$: Observable<any[]>;

  @Output() delete: EventEmitter<string> = new EventEmitter();

  readonly genders = ['Мужской', 'Женский'];

  constructor(private store: Store) {
    this.users$ = this.store
      .select((state) => state.users.users)
      .pipe(
        map((users) =>
          users.map((user: User) => ({
            ...user,
            isEditable: false,
            isEditLoading: false,
            isDeleteLoading: false,
          })),
        ),
      );
  }

  onSave(user: User) {
    user.isEditLoading = true;
    this.store.dispatch(new EditUser(user)).subscribe(() => {
      user.isEditLoading = false;
      user.isEditable = false;
    });
  }

  onDelete(user: User) {
    if (!user._id) {
      return;
    }

    user.isDeleteLoading = true;
    this.store.dispatch(new DeleteUser(user._id)).subscribe(() => {
      user.isDeleteLoading = false;
    });
  }
}
