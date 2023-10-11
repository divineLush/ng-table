export class GetUsers {
  static readonly type = 'GetUsers';
}

export class DeleteUser {
  static readonly type = 'DeleteUser';

  constructor(public userId: string) {}
}
