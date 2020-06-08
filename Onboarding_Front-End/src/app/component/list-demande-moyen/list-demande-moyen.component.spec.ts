import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeMoyenComponent } from './list-demande-moyen.component';

describe('ListDemandeMoyenComponent', () => {
  let component: ListDemandeMoyenComponent;
  let fixture: ComponentFixture<ListDemandeMoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandeMoyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
