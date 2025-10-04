import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserName } from './user-name';

describe('UserName', () => {
  let component: UserName;
  let fixture: ComponentFixture<UserName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
