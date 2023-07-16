import { Injectable } from "@angular/core";
import { Pedido } from "../model/Pedido";
import { WebStorageUtil } from "../util/web-storage-util";
import { Constants } from "../util/constants";

@Injectable({
  providedIn: 'root',
})
export class CadastroPedidoService {
  pedidos!: Pedido[];

  constructor() {
    this.pedidos = WebStorageUtil.get(Constants.PEDIDOS_KEY);
  }

  getAll(): Pedido[] {
    return WebStorageUtil.get(Constants.PEDIDOS_KEY);
  }

  save(pedido: Pedido) {
    this.pedidos = WebStorageUtil.get(Constants.PEDIDOS_KEY);
    if (!pedido.id) {
      pedido.id = this.nextId();
    }
    this.pedidos.push(pedido);
    WebStorageUtil.set(Constants.PEDIDOS_KEY, this.pedidos);
  }

  update(pedido: Pedido) {
    this.pedidos = WebStorageUtil.get(Constants.PEDIDOS_KEY);
    this.delete(pedido);
    this.save(pedido);
  }

  delete(pedido: Pedido) {
    this.pedidos = WebStorageUtil.get(Constants.PEDIDOS_KEY);
    this.pedidos = this.pedidos.filter((p) => {
      return p.id != pedido.id;
    });
    WebStorageUtil.set(Constants.PEDIDOS_KEY, this.pedidos);
    return true;
  }

  nextId() {
    let pedidosSorted = this.getSorted();
    if (pedidosSorted.length == 0) {
      return 1;
    }
    return pedidosSorted[0].id++;
  }

  getSorted() {
    return WebStorageUtil.get(Constants.PEDIDOS_KEY).sort((x, y) => {
      x.id > y.id ? -1 : 1;
    });
  }
}
