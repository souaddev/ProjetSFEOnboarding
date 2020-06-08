import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStatistiqueComponent } from './manager-statistique.component';

describe('ManagerStatistiqueComponent', () => {
  let component: ManagerStatistiqueComponent;
  let fixture: ComponentFixture<ManagerStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
