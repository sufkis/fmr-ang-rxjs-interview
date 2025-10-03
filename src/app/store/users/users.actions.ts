import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IUser } from '../../models/app.model';

export const usersPageOpened = createAction('[Users Page] Opened');

export const loadUsers = createAction('[Users API] Load Users');

export const setUsers = createAction(
  '[Users] Set Users',
  props<{ users: IUser[] }>()
);

export const selectUser = createAction(
'[Users] Select User',
props<{ id: string | null }>()
);

export const upsertUser = createAction(
  '[Users] Upsert User',
  props<{ user: IUser }>()
);

export const updateUser = createAction(
  '[Users] Update User',
  props<{ id: number; changes: Partial<IUser> }>()
);

export const removeUser = createAction(
  '[Users] Remove User',
  props<{ id: string }>()
);

