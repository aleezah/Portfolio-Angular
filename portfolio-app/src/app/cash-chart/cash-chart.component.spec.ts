import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashChartComponent } from './cash-chart.component';

describe('CashChartComponent', () => {
  let component: CashChartComponent;
  let fixture: ComponentFixture<CashChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
