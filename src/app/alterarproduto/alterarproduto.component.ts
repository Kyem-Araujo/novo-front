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
  selector: 'app-alterarproduto',
  templateUrl: './alterarproduto.component.html',
  styleUrls: ['./alterarproduto.component.css']
})
export class AlterarprodutoComponent implements OnInit {

  produto: Produto = new Produto

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
    let id = this.route.snapshot.params['idProdutoAlterado']
    this.findByIdProduto
  }

  findByIdProduto(idProduto: number) {
    this.produtoService.getByIdProduto(idProduto).subscribe((resp: Produto) => {
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
      this.categoria
    })
  }

  alterarProduto() {
    this.categoria.idCategoria = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.alterarProduto(this.produto, this.produto.idProduto, environment.cpf).subscribe((resp: Produto) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/meuPerfil/meusProdutos'])
    })
  }

}
