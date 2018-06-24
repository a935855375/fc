import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectedControllerComponent } from './suspected-controller.component';

describe('SuspectedControllerComponent', () => {
  let component: SuspectedControllerComponent;
  let fixture: ComponentFixture<SuspectedControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectedControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectedControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
