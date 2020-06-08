import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrProfilComponent } from './hr-profil.component';

describe('HrProfilComponent', () => {
  let component: HrProfilComponent;
  let fixture: ComponentFixture<HrProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
