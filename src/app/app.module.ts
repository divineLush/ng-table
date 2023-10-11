import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UsersState } from 'src/ngxs/users/users.state';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    NgxsModule.forRoot([UsersState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
