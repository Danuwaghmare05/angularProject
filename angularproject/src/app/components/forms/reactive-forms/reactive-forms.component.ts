import { UsernameValidators } from './../../../validator/username.validations';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent {
  formObj = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      UsernameValidators.noSpace,
    ]),
    pass: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  get uName() {
    return this.formObj.get('userName');
  }
  get pass() {
    return this.formObj.get('pass');
  }
}
