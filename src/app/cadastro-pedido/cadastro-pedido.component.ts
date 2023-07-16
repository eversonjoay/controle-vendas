import { Component, ViewChild } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { ActivatedRoute } from '@angular/router';
import { Shared } from '../util/Shared';
import { CadastroPedidoService } from './cadastro-pedido.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent {
  @ViewChild('form') form!: NgForm;

  pedido: Pedido;
  pedidos: Pedido[];
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cadastroPedidoService: CadastroPedidoService
  ) {}

  ngOnInit(): void {
    Shared.initilizeWebStorage();

    this.initPedido();

    let idPedido: number = +this.route.snapshot.paramMap.get('id')!;

    if (idPedido != null) {
      this.pedidos = this.cadastroPedidoService.getAll().filter((p) => {
        return p.id == idPedido;
      });

      if (this.pedidos.length > 0) {
        this.pedido = this.pedidos[0];
        this.editMode = true;
      }
    } else {
      this.pedido.id = this.cadastroPedidoService.nextId();
    }
  }

  initPedido() {
    this.pedido = {id: null, nome: '', valor: null}
  }

  onSubmit() {
    if (this.editMode) {
      this.cadastroPedidoService.update(this.pedido);
    } else {
      this.cadastroPedidoService.save(this.pedido);
    }

    this.editMode = false;
    this.form.reset();
    this.initPedido();
    this.pedidos = this.cadastroPedidoService.getAll();
    window.alert('Pedido salvo!');
  }

}
