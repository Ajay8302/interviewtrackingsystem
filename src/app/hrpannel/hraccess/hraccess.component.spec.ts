import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HraccessComponent } from './hraccess.component';

describe('HraccessComponent', () => {
  let component: HraccessComponent;
  let fixture: ComponentFixture<HraccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HraccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HraccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
