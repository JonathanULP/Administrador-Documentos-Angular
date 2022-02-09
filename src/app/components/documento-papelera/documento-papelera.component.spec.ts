import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoPapeleraComponent } from './documento-papelera.component';

describe('DocumentoPapeleraComponent', () => {
  let component: DocumentoPapeleraComponent;
  let fixture: ComponentFixture<DocumentoPapeleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoPapeleraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoPapeleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
