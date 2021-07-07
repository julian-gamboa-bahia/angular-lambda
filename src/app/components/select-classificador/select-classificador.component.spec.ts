import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClassificadorComponent } from './select-classificador.component';

describe('SelectClassificadorComponent', () => {
  let component: SelectClassificadorComponent;
  let fixture: ComponentFixture<SelectClassificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClassificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClassificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
