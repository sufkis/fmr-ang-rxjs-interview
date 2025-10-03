import { createReducer, on } from '@ngrx/store';
import { IOrder, IOrdersState } from '../../models/app.model';
import { setUserOrders } from './orders.actions';

const initialState: IOrdersState = {
    entities: {},
};

export const ordersReducer = createReducer(
    initialState,
    on(setUserOrders, (state, { userId, orders }) => {
        const kept = Object.values(state.entities).filter(o => o.userId !== userId);
        const next = kept.reduce<Record<number, IOrder>>((acc, o) => { acc[o.id] = o; return acc; }, {});
        for (const o of orders) next[o.id] = o;
        return { ...state, entities: next };
    }),
);