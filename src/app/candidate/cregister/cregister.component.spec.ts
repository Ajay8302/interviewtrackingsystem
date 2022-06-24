import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CregisterComponent } from './cregister.component';

describe('CregisterComponent', () => {
  let component: CregisterComponent;
  let fixture: ComponentFixture<CregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
