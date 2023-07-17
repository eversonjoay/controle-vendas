import { Pedido } from './../model/Pedido';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Shared } from '../util/Shared';
import { CadastroPedidoService } from './../cadastro-pedido/cadastro-pedido.service';
import { PedidoPromiseService } from '../services/pedido-promise.service';

@Component({
  selector: 'app-listagem-pedidos',
  templateUrl: './listagem-pedidos.component.html',
  styleUrls: ['./listagem-pedidos.component.css']
})
export class ListagemPedidosComponent {

  pedidos: Pedido[];

  constructor(
    private router: Router,
    private cadastroPedidoService: CadastroPedidoService,
    private pedidoPromiseService: PedidoPromiseService
  ) {}

  ngOnInit(): void {
    Shared.initilizeWebStorage();
    this.pedidoPromiseService.getAll().then((p: Pedido[]) => {
      this.pedidos = p;
    }).catch((e) => {
      this.pedidos = this.cadastroPedidoService.getAll();
    })
  }

  onClickItem(pedido) {
    this.router.navigate(['cadastro-pedido/', pedido.id]);
  }

}
