import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import UsersStateModel from './users.model';
import { GetUsers } from './users.actions';
import { BackendService } from 'src/app/services/backend.service';
import User from 'src/app/interfaces/user';

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})
@Injectable()
export class UsersState {
  constructor(private readonly backend: BackendService) {}

  @Action(GetUsers)
  getUsers(ctx: StateContext<UsersStateModel>) {
    this.backend.getUsers().subscribe((users) => {
      ctx.setState({ users: users as User[] });
    })
  }
}
