import { Component } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent {
  pedido: Pedido = {id: null, nome: '', valor: null};

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let idPedido: number = +this.route.snapshot.paramMap.get('id')!;
    let nomePedido: string = this.route.snapshot.paramMap.get('nome')!;
    let valorPedido: number = +this.route.snapshot.paramMap.get('valor')!;

    this.pedido = {id: idPedido, nome: nomePedido, valor: valorPedido};
  }
}
