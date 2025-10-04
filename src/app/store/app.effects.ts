import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { IAppState } from '../models/app.model';
import { UserService } from '../services/user-service';
import * as OrdersActions from './orders/orders.actions';
import * as UsersActions from './users/users.actions';
import { selectSelectedUserId } from './users/users.selectors';

@Injectable()
export class AppEffects {
    private actions$ = inject(Actions);
    private store = inject<Store<IAppState>>(Store);
    private userService = inject(UserService);

    initUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.usersPageOpened, UsersActions.loadUsers),
            switchMap(() => this.userService.getUsers().pipe(
                map(users => UsersActions.setUsers({ users }))
            ))
        )
    );

    fetchOrdersOnSelection$ = createEffect(() =>
        this.store.select(selectSelectedUserId).pipe(
            distinctUntilChanged(),
            switchMap(userId =>
                userId == null
                    ? EMPTY
                    : this.userService.getOrdersByUserId(userId).pipe(
                        map(orders => OrdersActions.setUserOrders({ userId, orders }))
                    )
            )
        )
    );
}