import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XrpTransactionsComponent } from './xrp-transactions.component';

describe('XrpTransactionsComponent', () => {
  let component: XrpTransactionsComponent;
  let fixture: ComponentFixture<XrpTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XrpTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XrpTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
