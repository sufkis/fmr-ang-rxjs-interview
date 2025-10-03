import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IUser, IUsersState } from '../../models/app.model';

export const selectUsersState = createFeatureSelector<IAppState, IUsersState>('users');
export const selectUserEntities = createSelector(selectUsersState, state => state.entities);
export const selectAllUsers = createSelector(selectUserEntities, entities => Object.values(entities));
export const selectSelectedUserId = createSelector(selectUsersState, state => state.selectedUserId);
export const selectSelectedUser = createSelector(
    selectUserEntities,
    selectSelectedUserId,
    (entities, id): IUser | null => (id != null ? entities[id] ?? null : null)
);
export const selectSelectedUserName = createSelector(selectSelectedUser, user => user?.name ?? '—');