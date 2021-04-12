import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AlterarcadastroComponent } from './alterarcadastro/alterarcadastro.component';
import { AlterarprodutoComponent } from './alterarproduto/alterarproduto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CardComponent } from './card/card.component';
import { CriarprodutoComponent } from './criarproduto/criarproduto.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { TelaFavoritosComponent } from './tela-favoritos/tela-favoritos.component';
import { CorpoHomeComponent } from './corpo-home/corpo-home.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NossoTimeComponent } from './nosso-time/nosso-time.component';
import { ContatoComponent } from './contato/contato.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { PaginaProdutoVendedorComponent } from './pagina-produto-vendedor/pagina-produto-vendedor.component';

import { AlertasComponent } from './alertas/alertas.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CriarCategoriaComponent } from './criar-categoria/criar-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    AlterarcadastroComponent,
    AlterarprodutoComponent,
    CadastrarComponent,
    CardComponent,
    CriarprodutoComponent,
    ComoFuncionaComponent,
    TelaUsuarioComponent,
    TelaProdutosComponent,
    TelaFavoritosComponent,
    CorpoHomeComponent,
    MinhasComprasComponent,
    CategoriasComponent,
    NossoTimeComponent,
    ContatoComponent,
    MenuLogadoComponent,
    PaginaProdutoComponent,
    PaginaProdutoVendedorComponent,
    
    AlertasComponent,
    
    QuemSomosComponent,
    
    CriarCategoriaComponent,
    
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
