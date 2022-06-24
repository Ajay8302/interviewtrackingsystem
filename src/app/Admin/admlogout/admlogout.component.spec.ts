import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmlogoutComponent } from './admlogout.component';

describe('AdmlogoutComponent', () => {
  let component: AdmlogoutComponent;
  let fixture: ComponentFixture<AdmlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
