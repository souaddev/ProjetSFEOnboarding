import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeStatistiqueComponent } from './employe-statistique.component';

describe('EmployeStatistiqueComponent', () => {
  let component: EmployeStatistiqueComponent;
  let fixture: ComponentFixture<EmployeStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
