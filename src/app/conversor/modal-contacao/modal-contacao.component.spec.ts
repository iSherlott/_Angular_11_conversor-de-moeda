import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContacaoComponent } from './modal-contacao.component';

describe('ModalContacaoComponent', () => {
  let component: ModalContacaoComponent;
  let fixture: ComponentFixture<ModalContacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
