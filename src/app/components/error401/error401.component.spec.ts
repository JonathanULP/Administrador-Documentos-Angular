import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERROR401Component } from './error401.component';

describe('ERROR401Component', () => {
  let component: ERROR401Component;
  let fixture: ComponentFixture<ERROR401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERROR401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERROR401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
