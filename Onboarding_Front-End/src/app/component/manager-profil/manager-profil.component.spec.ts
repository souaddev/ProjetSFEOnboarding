import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProfilComponent } from './manager-profil.component';

describe('ManagerProfilComponent', () => {
  let component: ManagerProfilComponent;
  let fixture: ComponentFixture<ManagerProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
