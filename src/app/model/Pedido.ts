export class Pedido {
  id: number;
  nome: string;
  valor: number;
  pagamento: string;

  constructor(id:number, nome:string, valor:number, pagamento: string) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.pagamento = pagamento;
  }
}
