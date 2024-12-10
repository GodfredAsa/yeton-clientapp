import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutPieChartComponent } from './donut-pie-chart.component';

describe('DonutPieChartComponent', () => {
  let component: DonutPieChartComponent;
  let fixture: ComponentFixture<DonutPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutPieChartComponent]
    });
    fixture = TestBed.createComponent(DonutPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
