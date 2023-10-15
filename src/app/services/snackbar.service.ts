import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  showMessage(message: string) {
    this.snackbar.open(message, 'Закрыть', { duration: 6000 });
  }
}
