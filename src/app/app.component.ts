import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,
    FormsModule,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BigProject';
}
