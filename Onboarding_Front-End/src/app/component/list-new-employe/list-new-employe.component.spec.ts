import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewEmployeComponent } from './list-new-employe.component';

describe('ListNewEmployeComponent', () => {
  let component: ListNewEmployeComponent;
  let fixture: ComponentFixture<ListNewEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
