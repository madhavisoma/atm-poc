import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioHistoryComponent } from './transactio-history.component';

describe('TransactioHistoryComponent', () => {
  let component: TransactioHistoryComponent;
  let fixture: ComponentFixture<TransactioHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactioHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactioHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
