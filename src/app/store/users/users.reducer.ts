import { createReducer, on } from '@ngrx/store';
import { removeUser, selectUser, setUsers, updateUser, upsertUser } from './users.actions';
import { IUser, IUsersState } from '../../models/app.model';

const initialState: IUsersState = {
    entities: {},
    selectedUserId: null,
};

function toEntities(users: IUser[]): Record<number, IUser> {
    return users.reduce<Record<number, IUser>>((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {} as Record<number, IUser>);
}

export const usersReducer = createReducer(
    initialState,
    on(selectUser, (state, { id }) => ({
        ...state,
        selectedUserId: id ? +id : null,
    })),
    on(setUsers, (state, { users }) => ({
        ...state,
        entities: toEntities(users),
    })),
    on(upsertUser, (state, { user }) => ({
        ...state,
        entities: { ...state.entities, [user.id]: user },
    })),
    on(updateUser, (state, { id, changes }) => ({
        ...state,
        entities: {
            ...state.entities,
            [id]: { ...state.entities[id as number], ...changes },
        },
    })),
    on(removeUser, (state, { id }) => {
        const entities: Record<number, IUser> = { ...state.entities };
        delete entities[+id];
        return { ...state, entities };
    }),
);