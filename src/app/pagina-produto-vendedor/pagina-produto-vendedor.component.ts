import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pagina-produto-vendedor',
  templateUrl: './pagina-produto-vendedor.component.html',
  styleUrls: ['./pagina-produto-vendedor.component.css']
})
export class PaginaProdutoVendedorComponent implements OnInit {
 
  produto: Produto = new Produto()
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.cpf

  constructor(private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllCategorias()
    this.idProduto = this.route.snapshot.params['idProduto']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(idProduto: number) {
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria=resp
    })
  }

  deletarProduto() {
   

    this.produtoService.deletarProduto(this.idProduto, environment.cpf).subscribe(() => {
      
      this.alertas.showAlertSuccess('Produto deletado com sucesso!')
      this.router.navigate(['/meuPerfil/meusProdutos'])
    })
  }
}
