import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLayoutComponent } from './hr-layout.component';

describe('EmployeLayoutComponent', () => {
  let component: HrLayoutComponent;
  let fixture: ComponentFixture<HrLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
