import { Component , computed, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../UserService/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  user: { firstname: string , pass: string } | null = null;
  fullName = computed(() => {
    const u = this.user;
    return u ? `$ {u.firstname}  $ {u.pass}` : '';
  })
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user = this.userService.user();
  }
  
  
  
}
