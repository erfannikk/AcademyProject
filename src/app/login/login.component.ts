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
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { UserService } from '../UserService/user.service';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  firstname = '';
  pass = '';
  readonly name = new FormControl('');

  errorMessage = signal('');

  constructor(private router: Router, private userService: UserService) {}

  updateErrorMessage() {
    if (this.name.hasError('required')) {
      this.errorMessage.set(' لطفا نام کاربری خود را وارد نمایید ');
    } else if (this.name.hasError('name')) {
      this.errorMessage.set('Not a valid username');
    } else {
      this.errorMessage.set('');
    }
  }
  readonly password = new FormControl('',);

  errorMessage2 = signal('');

  updateErrorMessage2() {
    if (this.password.hasError('required')) {
      this.errorMessage2.set(' لطفا پسورد خود را وارد نمایید ');
    } else if (this.password.hasError('name')) {
      this.errorMessage2.set('Not a valid password');
    } else {
      this.errorMessage2.set('');
    }
  }

  Login() {
     this.userService.setUser(this.firstname,this.pass);
     this.router.navigate(['/home'])
  }
}
