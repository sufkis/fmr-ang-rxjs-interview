import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAmount } from './order-amount';

describe('OrderAmount', () => {
  let component: OrderAmount;
  let fixture: ComponentFixture<OrderAmount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderAmount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAmount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
