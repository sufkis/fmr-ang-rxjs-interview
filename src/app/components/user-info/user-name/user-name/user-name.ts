import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../models/app.model';
import * as UsersSelectors from '../../../../store/users/users.selectors';

@Component({
  selector: 'user-name',
  imports: [
    AsyncPipe
  ],
  templateUrl: './user-name.html',
  styleUrl: './user-name.scss'
})
export class UserNameComponent {
  private store = inject<Store<IAppState>>(Store);
  name$ = this.store.select(UsersSelectors.selectSelectedUserName);
}
