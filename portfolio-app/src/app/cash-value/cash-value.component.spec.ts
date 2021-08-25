import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashValueComponent } from './cash-value.component';

describe('CashValueComponent', () => {
  let component: CashValueComponent;
  let fixture: ComponentFixture<CashValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
