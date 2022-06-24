import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechlogoutComponent } from './techlogout.component';

describe('TechlogoutComponent', () => {
  let component: TechlogoutComponent;
  let fixture: ComponentFixture<TechlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
