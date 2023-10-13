import User from 'src/app/interfaces/user';

export class GetUsers {
  static readonly type = 'GetUsers';
}

export class AddUser {
  static readonly type = 'AddUser';

  constructor(public user: User) {}
}

export class DeleteUser {
  static readonly type = 'DeleteUser';

  constructor(public userId: string) {}
}
