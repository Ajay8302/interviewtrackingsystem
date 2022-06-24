import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrloginComponent } from './hrlogin.component';

describe('HrloginComponent', () => {
  let component: HrloginComponent;
  let fixture: ComponentFixture<HrloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
