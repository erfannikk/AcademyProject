import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { computed } from '@angular/core';
import { UserService } from '../UserService/user.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  user: { firstname: string; pass: string } | null = null;

  fullName = computed(() => {
    const u = this.user;
    return u ? `$ {u.firstname}  $ {u.pass}` : '';
  });
  constructor(private userService: UserService) {}

  onToggleClick() {
    this.toggle.emit();
  }

  ngOnInit(): void {
    this.user = this.userService.user();
  }
}
