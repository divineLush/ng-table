import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import UsersStateModel from './users.model';
import { AddUser, DeleteUser, GetUsers } from './users.actions';
import { BackendService } from 'src/app/services/backend.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import User from 'src/app/interfaces/user';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    users: [],
  },
})
@Injectable()
export class UsersState {
  constructor(private readonly backend: BackendService, private readonly snackbar: SnackbarService) {}

  @Action(GetUsers)
  getUsers(ctx: StateContext<UsersStateModel>) {
    return this.backend.getUsers().pipe(
        tap(
          (users) => {
            ctx.setState({ users: users as User[] });
          }),
        catchError(
          (error: HttpErrorResponse) => {
            this.snackbar.showMessage(error.message);
            return of(error);
          }
        )
      );
  }

  @Action(AddUser)
  addUser(ctx: StateContext<UsersStateModel>, { user }: { user: User }) {
    return this.backend.addUser(user).pipe(
      tap(
        () => {
          this.snackbar.showMessage('Пользователь успешно добавлен!');
          const users = [...ctx.getState().users, user];
          ctx.setState({ users });
        }),
        catchError(
          (error: HttpErrorResponse) => {
            this.snackbar.showMessage(error.message);
            return of(error);
          }
        )
      );
  }

  @Action(DeleteUser)
  deleteUser(ctx: StateContext<UsersStateModel>, userId: { userId: string }) {
    return this.backend.deleteUser(userId.userId).pipe(
      tap(
        () => {
          this.snackbar.showMessage('Пользователь успешно удален!');
          const users = ctx
            .getState()
            .users.filter((user) => user._id !== userId.userId);
          ctx.setState({ users });
        }),
        catchError(
          (error: HttpErrorResponse) => {
            this.snackbar.showMessage(error.message);
            return of(error);
          }
        )
      );
  }
}
