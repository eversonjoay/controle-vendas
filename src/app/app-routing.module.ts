import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ListagemPedidosComponent } from './listagem-pedidos/listagem-pedidos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListagemPedidosComponent},
  {path: 'cadastro-pedido', component: CadastroPedidoComponent},
  {path: 'cadastro-pedido/:id/:nome/:valor', component: CadastroPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
