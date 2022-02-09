import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosPapeleraComponent } from './documentos-papelera.component';

describe('DocumentosPapeleraComponent', () => {
  let component: DocumentosPapeleraComponent;
  let fixture: ComponentFixture<DocumentosPapeleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosPapeleraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosPapeleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
