import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoyenComponent } from './list-moyen.component';

describe('ListMoyenComponent', () => {
  let component: ListMoyenComponent;
  let fixture: ComponentFixture<ListMoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
