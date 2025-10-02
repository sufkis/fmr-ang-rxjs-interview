import { Component, inject, signal } from '@angular/core';
import { IUser, UserService } from './services/user-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected userService = inject(UserService);

  users: IUser[] = []

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
