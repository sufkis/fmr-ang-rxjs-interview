export interface IUsersState {
    entities: { [id: number]: IUser };
    selectedUserId: number | null;
}

export interface IOrdersState {
    entities: { [id: number]: IOrder };
}

export interface IAppState {
    users: IUsersState,
    orders: IOrdersState
}

export interface IOrder {
    id: number;
    userId: number;
    amount: number;
}

export interface IUser {
    id: number;
    name: string;
}