import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface IOrder {
  id: string;
  amount: number;
}

export interface IUser {
  id: string;
  name: string;
  orders: IOrder[];
}

const usersExmaple = [
  {
    id: 'u1', name: 'Alice', orders: [
      { id: 'o1', amount: 120 },
      { id: 'o2', amount: 80 },
      { id: 'o3', amount: 45 },
      { id: 'o4', amount: 200 }
    ]
  },
  {
    id: 'u2', name: 'Bob', orders: [
      { id: 'o5', amount: 50 },
      { id: 'o6', amount: 75 },
      { id: 'o7', amount: 30 },
      { id: 'o8', amount: 60 }
    ]
  },
  {
    id: 'u3', name: 'Charlie', orders: [
      { id: 'o9', amount: 99 },
      { id: 'o10', amount: 150 }
    ]
  },
  {
    id: 'u4', name: 'Dana', orders: [
      { id: 'o11', amount: 20 },
      { id: 'o12', amount: 220 },
      { id: 'o13', amount: 40 },
      { id: 'o14', amount: 90 },
      { id: 'o15', amount: 10 }
    ]
  },
  {
    id: 'u5', name: 'Eli', orders: [
      { id: 'o16', amount: 15 },
      { id: 'o17', amount: 35 },
      { id: 'o18', amount: 85 }
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
    {
      id: 'u1', name: 'Alice', orders: [
        { id: 'o1', amount: 120 },
        { id: 'o2', amount: 80 },
        { id: 'o3', amount: 45 },
        { id: 'o4', amount: 200 }
      ]
    },
    {
      id: 'u2', name: 'Bob', orders: [
        { id: 'o5', amount: 50 },
        { id: 'o6', amount: 75 },
        { id: 'o7', amount: 30 },
        { id: 'o8', amount: 60 }
      ]
    },
    {
      id: 'u3', name: 'Charlie', orders: [
        { id: 'o9', amount: 99 },
        { id: 'o10', amount: 150 }
      ]
    },
    {
      id: 'u4', name: 'Dana', orders: [
        { id: 'o11', amount: 20 },
        { id: 'o12', amount: 220 },
        { id: 'o13', amount: 40 },
        { id: 'o14', amount: 90 },
        { id: 'o15', amount: 10 }
      ]
    },
    {
      id: 'u5', name: 'Eli', orders: [
        { id: 'o16', amount: 15 },
        { id: 'o17', amount: 35 },
        { id: 'o18', amount: 85 }
      ]
    },
  ];


  getUsers(): Observable<IUser[]> {
    return of(this.users).pipe(delay(400));
  }
}
