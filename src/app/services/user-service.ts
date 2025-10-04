import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IOrder, IUser } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Dana' },
    { id: 5, name: 'Eli' },
  ];

  private orders: Record<number, IOrder[]> = {
    1: [{ id: 1, amount: 120, userId: 1 }, { id: 2, amount: 80, userId: 1 }, { id: 3, amount: 45, userId: 1 }, { id: 4, amount: 200, userId: 1 }],
    2: [{ id: 5, amount: 50, userId: 2 }, { id: 6, amount: 75, userId: 2 }, { id: 7, amount: 30, userId: 2 }, { id: 8, amount: 60, userId: 2 }],
    3: [{ id: 9, amount: 99, userId: 3 }, { id: 10, amount: 150, userId: 3 }],
    4: [{ id: 11, amount: 20, userId: 4 }, { id: 12, amount: 220, userId: 4 }, { id: 13, amount: 40, userId: 4 }, { id: 14, amount: 90, userId: 4 }, { id: 15, amount: 10, userId: 4 }],
    5: [{ id: 16, amount: 15, userId: 5 }, { id: 17, amount: 35, userId: 5 }, { id: 18, amount: 85, userId: 5 }],
  };

  getUsers(): Observable<IUser[]> {
    return of(this.users).pipe(delay(400));
  }

  getOrdersByUserId(userId: number): Observable<IOrder[]> {
    return of(this.orders[userId] ?? []).pipe(delay(600));
  }
}
