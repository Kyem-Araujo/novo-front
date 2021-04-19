import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-alterarproduto',
  templateUrl: './alterarproduto.component.html',
  styleUrls: ['./alterarproduto.component.css']
})
export class AlterarprodutoComponent implements OnInit {

  produto: Produto = new Produto
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.cpf

  constructor(private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    private userService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllCategorias()
    this.idProduto = this.route.snapshot.params['idProdutoAlterado']
    this.findByIdProduto
    this.userService.getBycpf(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
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
      this.categoria = resp
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

  alterarProduto2(){
    this.categoria.idCategoria = this.idCategoria
    this.produto.categoria = this.categoria
    this.produto.idProduto = this.idProduto
    this.produto.usuario = this.usuario

    console.log(this.produto)
    this.produtoService.alterarProduto2(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/meuPerfil/meusProdutos'])
    })
  }

}
