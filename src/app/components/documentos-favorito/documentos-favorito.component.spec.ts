import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosFavoritoComponent } from './documentos-favorito.component';

describe('DocumentosFavoritoComponent', () => {
  let component: DocumentosFavoritoComponent;
  let fixture: ComponentFixture<DocumentosFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosFavoritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
