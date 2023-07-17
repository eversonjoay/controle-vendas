import { PedidoPromiseService } from "./../services/pedido-promise.service";
import { Component, ViewChild } from "@angular/core";
import { Pedido } from "../model/Pedido";
import { ActivatedRoute } from "@angular/router";
import { Shared } from "../util/Shared";
import { CadastroPedidoService } from "./cadastro-pedido.service";
import { NgForm } from "@angular/forms";
import { Constants } from "../util/constants";

@Component({
  selector: "app-cadastro-pedido",
  templateUrl: "./cadastro-pedido.component.html",
  styleUrls: ["./cadastro-pedido.component.css"],
})
export class CadastroPedidoComponent {
  @ViewChild("form") form!: NgForm;

  pedido: Pedido;
  pedidos: Pedido[];
  editMode: boolean = false;

  situacaoPagamento: string[] = [Constants.NAO_PAGO, Constants.PAGO_PARCIAL ,Constants.PAGO];

  constructor(
    private route: ActivatedRoute,
    private cadastroPedidoService: CadastroPedidoService,
    private pedidoPromiseService: PedidoPromiseService
  ) {}

  ngOnInit(): void {
    Shared.initilizeWebStorage();

    this.initPedido();

    let idPedido: number = +this.route.snapshot.paramMap.get("id")!;

    if (idPedido > 0) {
      this.pedidoPromiseService
        .getById(idPedido)
        .then((p: Pedido) => {
          this.pedido = p;
        })
        .catch((e) => {
          this.pedidos = this.cadastroPedidoService.getAll().filter((p) => {
            return p.id == idPedido;
          });

          if (this.pedidos.length > 0) {
            this.pedido = this.pedidos[0];
          }
        });
      this.editMode = true;
    }
  }

  initPedido() {
    this.pedido = { id: null, nome: "", valor: null, pagamento: '' };
  }

  onSubmit() {
    if (this.editMode) {
      this.pedidoPromiseService
        .update(this.pedido)
        .then((p: Pedido) => {
          this.pedido = p;
        })
        .catch((e) => {
          this.cadastroPedidoService.update(this.pedido);
        });
    } else {
      console.log(this.pedido);
      this.pedidoPromiseService
        .save(this.pedido)
        .then((p: Pedido) => {
          this.pedido = p;
        })
        .catch((e) => {
          this.cadastroPedidoService.save(this.pedido);
        });
    }

    this.editMode = false;
    this.form.reset();
    this.initPedido();
    this.pedidoPromiseService
      .getAll()
      .then((p: Pedido[]) => {
        this.pedidos = p;
      })
      .catch((e) => {
        this.pedidos = this.cadastroPedidoService.getAll();
      });
    window.alert("Pedido salvo!");
  }
}
