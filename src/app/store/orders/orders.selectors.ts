import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IOrder, IOrdersState } from '../../models/app.model';
import { selectSelectedUserId } from '../users/users.selectors';


export const selectOrdersState = createFeatureSelector<IAppState, IOrdersState>('orders');
export const selectOrderEntities = createSelector(selectOrdersState, s => s.entities);
export const selectAllOrders = createSelector(selectOrderEntities, entities => Object.values(entities));
export const selectSelectedUserOrders = createSelector(
    selectOrderEntities,
    selectSelectedUserId,
    (entities, userId): IOrder[] => (userId == null ? [] : Object.values(entities).filter(o => o.userId === userId))
);
export const selectSelectedUserOrdersTotal = createSelector(
    selectSelectedUserOrders,
    (orders) => orders.reduce((sum, order) => sum + order.amount, 0)
);