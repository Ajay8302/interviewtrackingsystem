import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCviewStatusComponent } from './adm-cview-status.component';

describe('AdmCviewStatusComponent', () => {
  let component: AdmCviewStatusComponent;
  let fixture: ComponentFixture<AdmCviewStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCviewStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCviewStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
