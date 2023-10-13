import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import AddUserForm from './add-user-form.form';
import User from 'src/app/interfaces/user';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
})
export class AddUserFormComponent {
  form: FormGroup<AddUserForm>;

  @Output() formSubmit: EventEmitter<User> = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.form = fb.group<AddUserForm>({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null),
      age: new FormControl(null),
      gender: new FormControl(null),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value as User);
    }
  }

  onReset() {
    this.form.reset();
  }
}
