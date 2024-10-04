import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QunatitiesofDenominationComponent } from './qunatitiesof-denomination.component';

describe('QunatitiesofDenominationComponent', () => {
  let component: QunatitiesofDenominationComponent;
  let fixture: ComponentFixture<QunatitiesofDenominationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QunatitiesofDenominationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QunatitiesofDenominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
