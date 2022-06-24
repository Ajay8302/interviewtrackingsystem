import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPaccessComponent } from './tech-paccess.component';

describe('TechPaccessComponent', () => {
  let component: TechPaccessComponent;
  let fixture: ComponentFixture<TechPaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPaccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
