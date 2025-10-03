import { createAction, props } from '@ngrx/store';
import { IOrder } from '../../models/app.model';

export const loadOrdersByUserId = createAction(
    '[Orders API] Load Orders By User Id',
    props<{ userId: number }>()
);

export const setUserOrders = createAction(
  '[Orders] Set User Orders',
  props<{ userId: number; orders: IOrder[] }>()
);