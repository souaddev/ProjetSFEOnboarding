import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeManagerComponent } from './list-employe-manager.component';

describe('ListEmployeManagerComponent', () => {
  let component: ListEmployeManagerComponent;
  let fixture: ComponentFixture<ListEmployeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
