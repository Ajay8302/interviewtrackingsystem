import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviewStatusComponent } from './cview-status.component';

describe('CviewStatusComponent', () => {
  let component: CviewStatusComponent;
  let fixture: ComponentFixture<CviewStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CviewStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CviewStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
