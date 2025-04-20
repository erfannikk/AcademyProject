import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly name = new FormControl('');

  errorMessage = signal('');

  constructor() {}

  updateErrorMessage() {
    if (this.name.hasError('required')) {
      this.errorMessage.set(' لطفا نام کاربری خود را وارد نمایید ');
    } else if (this.name.hasError('name')) {
      this.errorMessage.set('Not a valid username');
    } else {
      this.errorMessage.set('');
    }
  }
  readonly password = new FormControl('');

  errorMessage2 = signal('');

  updateErrorMessage2() {
    if (this.name.hasError('required')) {
      this.errorMessage.set(' لطفا پسورد خود را وارد نمایید ');
    } else if (this.name.hasError('name')) {
      this.errorMessage.set('Not a valid password');
    } else {
      this.errorMessage.set('');
    }
  }
}
