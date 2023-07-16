import { Pedido } from './../model/Pedido';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-pedidos',
  templateUrl: './listagem-pedidos.component.html',
  styleUrls: ['./listagem-pedidos.component.css']
})
export class ListagemPedidosComponent {

  pedidos: Pedido[] = [
    {id: 1, nome: 'Everson', valor: 100},
    {id: 2, nome: 'Eliane', valor: 150},
    {id: 3, nome: 'Ricardo', valor: 55}
  ];

  constructor(
    private router: Router
  ) {}

  onClickItem(pedido) {
    this.router.navigate(['cadastro-pedido/', pedido.id, pedido.nome, pedido.valor]);
  }

}
