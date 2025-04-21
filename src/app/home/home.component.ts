import { Component, signal } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent,
  HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.set(!this.sidebarOpen)
  }
}
