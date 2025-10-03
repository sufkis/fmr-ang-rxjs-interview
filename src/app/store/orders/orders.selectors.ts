import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectSelectedUser, selectSelectedUserId } from '../users/users.selectors';
import { IAppState, IOrder, IOrdersState } from '../../models/app.model';


export const selectOrdersState = createFeatureSelector<IAppState, IOrdersState>('orders');
export const selectOrderEntities = createSelector(selectOrdersState, s => s.entities);
export const selectAllOrders = createSelector(selectOrderEntities, entities => Object.values(entities));
export const selectSelectedUserOrders = createSelector(
    selectOrderEntities,
    selectSelectedUserId,
    (entities, userId): IOrder[] => (userId == null ? [] : Object.values(entities).filter(o => o.userId === userId))
);
export const selectSelectedUserNameAndOrdersTotal = createSelector(
    selectSelectedUser,
    selectSelectedUserOrders,
    (user, orders) => ({ name: user?.name ?? '', total: orders.reduce((sum, o) => sum + o.amount, 0) })
);