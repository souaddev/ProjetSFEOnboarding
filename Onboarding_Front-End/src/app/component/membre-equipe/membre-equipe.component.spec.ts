import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreEquipeComponent } from './membre-equipe.component';

describe('MembreEquipeComponent', () => {
  let component: MembreEquipeComponent;
  let fixture: ComponentFixture<MembreEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
