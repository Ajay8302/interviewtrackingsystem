import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtechComponent } from './showtech.component';

describe('ShowtechComponent', () => {
  let component: ShowtechComponent;
  let fixture: ComponentFixture<ShowtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
