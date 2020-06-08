import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStatistiqueComponent } from './hr-statistique.component';

describe('HrStatistiqueComponent', () => {
  let component: HrStatistiqueComponent;
  let fixture: ComponentFixture<HrStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
