import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarcadastroComponent } from './alterarcadastro/alterarcadastro.component';
import { AlterarprodutoComponent } from './alterarproduto/alterarproduto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CorpoHomeComponent } from './corpo-home/corpo-home.component';
import { CriarprodutoComponent } from './criarproduto/criarproduto.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { NossoTimeComponent } from './nosso-time/nosso-time.component';
import { PaginaProdutoVendedorComponent } from './pagina-produto-vendedor/pagina-produto-vendedor.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { TelaFavoritosComponent } from './tela-favoritos/tela-favoritos.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: 'paginaInicial', pathMatch: 'full'},

  {path: 'meuPerfil/alterarCadastro', component: AlterarcadastroComponent},
  {path: 'alterarCadastro/:id', component: AlterarcadastroComponent},
  {path: 'verCategoria/:id', component: CategoriasComponent},
  {path: 'verCategoria/:id/verProduto/:idProduto', component: PaginaProdutoComponent},
  {path: 'verProduto/:idProduto', component: PaginaProdutoComponent},
  {path: 'meuPerfil/meusProdutos/verProduto/:idProduto/alterarProduto/:idProdutoAlterado', component: AlterarprodutoComponent},
  {path: 'meuPerfil/meusProdutos/alterarProduto/:idProduto/:cpf', component: AlterarprodutoComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'comoFunciona', component: ComoFuncionaComponent},
  {path: 'paginaInicial', component: CorpoHomeComponent},
  {path: 'meuPerfil/meusProdutos/criarProduto', component: CriarprodutoComponent},
  {path: 'nossoTime', component: NossoTimeComponent},
  {path: 'meuPerfil/meusFavoritos', component: TelaFavoritosComponent},
  {path: 'meuPerfil/meusProdutos', component: TelaProdutosComponent},
  {path: 'meuPerfil/meusProdutos/verProduto/:idProduto', component: PaginaProdutoVendedorComponent},
  {path: 'meuPerfil/minhasCompras', component: MinhasComprasComponent},
  {path: 'logado', component: MenuLogadoComponent},
  {path: 'meuPerfil', component:TelaUsuarioComponent},
  {path: 'menuLogado', component:MenuLogadoComponent},
  {path: 'quemSomos', component: QuemSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
