import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrlogoutComponent } from './hrlogout.component';

describe('HrlogoutComponent', () => {
  let component: HrlogoutComponent;
  let fixture: ComponentFixture<HrlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
