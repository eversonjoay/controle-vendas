import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ListagemPedidosComponent } from './listagem-pedidos/listagem-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPedidoComponent,
    ListagemPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
