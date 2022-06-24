import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsharedComponent } from './techshared.component';

describe('TechsharedComponent', () => {
  let component: TechsharedComponent;
  let fixture: ComponentFixture<TechsharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechsharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
