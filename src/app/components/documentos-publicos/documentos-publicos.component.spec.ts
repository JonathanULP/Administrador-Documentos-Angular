import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosPublicosComponent } from './documentos-publicos.component';

describe('DocumentosPublicosComponent', () => {
  let component: DocumentosPublicosComponent;
  let fixture: ComponentFixture<DocumentosPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosPublicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
