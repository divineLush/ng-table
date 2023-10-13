import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from 'src/app/interfaces/user';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  readonly displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'age',
    'gender',
    'actions',
  ];

  @Input() users: User[] | null = [];

  @Output() delete: EventEmitter<string> = new EventEmitter();

  onDelete(userId: string) {
    this.delete.emit(userId);
  }
}
