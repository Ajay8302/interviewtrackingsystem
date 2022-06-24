import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRescheduleComponent } from './t-reschedule.component';

describe('TRescheduleComponent', () => {
  let component: TRescheduleComponent;
  let fixture: ComponentFixture<TRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TRescheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
