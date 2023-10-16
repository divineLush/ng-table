import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { UsersState } from './ngxs/users/users.state';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmptyTextPipe } from './pipes/empty-text.pipe';
import { SnackbarService } from './services/snackbar.service';
import { BackendService } from './services/backend.service';
import { MatPaginatorIntlCustom } from './components/users-table/mat-paginator-intl';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    AddUserFormComponent,
    EmptyTextPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([UsersState]),
  ],
  providers: [
    SnackbarService,
    BackendService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCustom },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
