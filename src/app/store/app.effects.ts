import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, switchMap, distinctUntilChanged } from 'rxjs/operators';

import * as UsersActions from './users/users.actions';
import * as OrdersActions from './orders/orders.actions';
import { selectSelectedUserId } from './users/users.selectors';
import { UserService } from '../services/user-service';
import { IAppState } from '../models/app.model';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private userService: UserService
    ) { }

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