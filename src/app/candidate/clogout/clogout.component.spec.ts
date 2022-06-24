import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClogoutComponent } from './clogout.component';

describe('ClogoutComponent', () => {
  let component: ClogoutComponent;
  let fixture: ComponentFixture<ClogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
