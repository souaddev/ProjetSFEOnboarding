import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNonRenduComponent } from './document-non-rendu.component';

describe('DocumentNonRenduComponent', () => {
  let component: DocumentNonRenduComponent;
  let fixture: ComponentFixture<DocumentNonRenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentNonRenduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentNonRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
