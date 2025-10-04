import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { IAppState, IUser } from './models/app.model';
import * as UsersActions from './store/users/users.actions';
import * as UsersSelectors from './store/users/users.selectors';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    CommonModule,
    UserInfoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private store = inject<Store<IAppState>>(Store);

  users$: Observable<IUser[]> = this.store.select(UsersSelectors.selectAllUsers);
  usersLength: number = 0
  selectedUserId$: Observable<number | null> = this.store.select(UsersSelectors.selectSelectedUserId);
  selectedUserId: number | null = null;

  constructor() {
    this.store.dispatch(UsersActions.usersPageOpened());
    this.selectedUserId$.subscribe(userId => {
      this.selectedUserId = userId;
    });
    this.users$.subscribe(users => {
      this.usersLength = users.length;
    })
  }

  selectUser(userId: number) {
    this.store.dispatch(UsersActions.selectUser({ id: userId }));
  }
}
