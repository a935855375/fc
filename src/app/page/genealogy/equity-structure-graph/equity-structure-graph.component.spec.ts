import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityStructureGraphComponent } from './equity-structure-graph.component';

describe('EquityStructureGraphComponent', () => {
  let component: EquityStructureGraphComponent;
  let fixture: ComponentFixture<EquityStructureGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityStructureGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityStructureGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
