import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticipationComponent } from './list-participation.component';

describe('ListParticipationComponent', () => {
  let component: ListParticipationComponent;
  let fixture: ComponentFixture<ListParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
