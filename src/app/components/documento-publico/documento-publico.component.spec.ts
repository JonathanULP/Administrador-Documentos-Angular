import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoPublicoComponent } from './documento-publico.component';

describe('DocumentoPublicoComponent', () => {
  let component: DocumentoPublicoComponent;
  let fixture: ComponentFixture<DocumentoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
