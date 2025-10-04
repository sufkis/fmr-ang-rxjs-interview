import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../models/app.model';
import * as OrdersSelectors from '../../../../store/orders/orders.selectors';

@Component({
  selector: 'order-amount',
  imports: [
    AsyncPipe
  ],
  templateUrl: './order-amount.html',
  styleUrl: './order-amount.scss'
})
export class OrderAmountComponent {
  private store = inject<Store<IAppState>>(Store);
  orderTotalAmount$ = this.store.select(OrdersSelectors.selectSelectedUserOrdersTotal);
  totalAmount: number = 0;

  constructor() {
    this.orderTotalAmount$.subscribe(amount =>{
      this.totalAmount = amount;
    })
  }
}
