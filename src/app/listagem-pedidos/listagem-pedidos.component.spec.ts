import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedidosComponent } from './listagem-pedidos.component';

describe('ListagemPedidosComponent', () => {
  let component: ListagemPedidosComponent;
  let fixture: ComponentFixture<ListagemPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemPedidosComponent]
    });
    fixture = TestBed.createComponent(ListagemPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
