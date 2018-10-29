import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryForwardComponent } from './carry-forward.component';

describe('CarryForwardComponent', () => {
  let component: CarryForwardComponent;
  let fixture: ComponentFixture<CarryForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
