import { FormControl } from '@angular/forms';

export default interface AddUserForm {
  firstname: FormControl<string | null>;
  lastname: FormControl<string | null>;
  email: FormControl<string | null>;
  age: FormControl<string | null>;
  gender: FormControl<string | null>;
}
