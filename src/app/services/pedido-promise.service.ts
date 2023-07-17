import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pedido } from "../model/Pedido";

@Injectable({
  providedIn: "root",
})
export class PedidoPromiseService {
  URL = "http://localhost:3000/pedidos";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.URL).toPromise();
  }

  getById(id: number): Promise<Pedido> {
    return this.httpClient.get<Pedido>(`${this.URL}/${id}`).toPromise();
  }

  save(pedido: Pedido): Promise<Pedido> {
    return this.httpClient
      .post<Pedido>(this.URL, JSON.stringify(pedido), this.httpOptions)
      .toPromise();
  }

  patch(Pedido: Pedido): Promise<Pedido> {
    return this.httpClient
      .patch<Pedido>(
        `${this.URL}/${Pedido.id}`,
        JSON.stringify(Pedido),
        this.httpOptions
      )
      .toPromise();
  }

  update(Pedido: Pedido): Promise<Pedido> {
    return this.httpClient
      .put<Pedido>(
        `${this.URL}/${Pedido.id}`,
        JSON.stringify(Pedido),
        this.httpOptions
      )
      .toPromise();
  }
}
