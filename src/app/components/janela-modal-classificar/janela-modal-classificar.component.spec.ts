import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaModalClassificarComponent } from './janela-modal-classificar.component';

describe('JanelaModalClassificarComponent', () => {
  let component: JanelaModalClassificarComponent;
  let fixture: ComponentFixture<JanelaModalClassificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanelaModalClassificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanelaModalClassificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
