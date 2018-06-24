import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseGraphComponent } from './enterprise-graph.component';

describe('EnterpriseGraphComponent', () => {
  let component: EnterpriseGraphComponent;
  let fixture: ComponentFixture<EnterpriseGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
