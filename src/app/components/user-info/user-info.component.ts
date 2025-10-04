import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { IAppState, IUser } from '../../models/app.model';
import * as UsersActions from '../../store/users/users.actions';
import * as UsersSelectors from '../../store/users/users.selectors';
import { OrderAmountComponent } from "./order-amount/order-amount/order-amount";
import { UserNameComponent } from "./user-name/user-name/user-name";

@Component({
  selector: 'user-info',
  imports: [
    UserNameComponent,
    OrderAmountComponent,
    FormsModule
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  private store = inject<Store<IAppState>>(Store);
  user$: Observable<IUser | null> = this.store.select(UsersSelectors.selectSelectedUser);

  isInEditMode: boolean = false;
  nameInput: string = '';

  startEdit() {
    this.user$.pipe(take(1)).subscribe(user => {
      console.log("User", user)
      if (!user) return;
      this.nameInput = user.name;
      this.isInEditMode = true;
    });
  }

  confirmEdit() {
    this.user$.pipe(take(1)).subscribe(user => {
      if (!user) return;
      const name = this.nameInput?.trim();
      if (!name || name === user.name) { this.isInEditMode = false; return; }
      this.store.dispatch(UsersActions.updateUser({ id: user.id, changes: { name } }));
      this.isInEditMode = false;
    });
  }
}
