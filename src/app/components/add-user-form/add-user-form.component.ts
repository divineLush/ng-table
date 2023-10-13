import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import AddUserForm from './add-user-form.form';
import User from 'src/app/interfaces/user';
import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/ngxs/users/users.actions';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
})
export class AddUserFormComponent {
  form: FormGroup<AddUserForm>;

  isLoading = false;

  readonly genders = ['Мужской', 'Женский'];

  constructor(fb: FormBuilder, private store: Store) {
    this.form = fb.group<AddUserForm>({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      age: new FormControl(null, [Validators.min(18), Validators.max(99), Validators.pattern('[0-9+]')]),
      gender: new FormControl(null),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        return;
    }

    this.isLoading = true;
    this.store.dispatch(new AddUser(this.form.value as User)).subscribe(() => {
      this.isLoading = false;
    });
  }

  onReset() {
    this.form.reset();
  }
}
