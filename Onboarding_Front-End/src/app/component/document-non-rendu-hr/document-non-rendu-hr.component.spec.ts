import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNonRenduHrComponent } from './document-non-rendu-hr.component';

describe('DocumentNonRenduHrComponent', () => {
  let component: DocumentNonRenduHrComponent;
  let fixture: ComponentFixture<DocumentNonRenduHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentNonRenduHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentNonRenduHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
