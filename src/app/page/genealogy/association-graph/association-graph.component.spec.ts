import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationGraphComponent } from './association-graph.component';

describe('AssociationGraphComponent', () => {
  let component: AssociationGraphComponent;
  let fixture: ComponentFixture<AssociationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
