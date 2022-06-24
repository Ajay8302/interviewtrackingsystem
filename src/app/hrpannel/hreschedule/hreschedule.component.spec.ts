import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrescheduleComponent } from './hreschedule.component';

describe('HrescheduleComponent', () => {
  let component: HrescheduleComponent;
  let fixture: ComponentFixture<HrescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrescheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
