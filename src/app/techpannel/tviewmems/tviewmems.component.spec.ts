import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TviewmemsComponent } from './tviewmems.component';

describe('TviewmemsComponent', () => {
  let component: TviewmemsComponent;
  let fixture: ComponentFixture<TviewmemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TviewmemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TviewmemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
