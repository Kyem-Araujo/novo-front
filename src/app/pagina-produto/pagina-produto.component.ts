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
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {
  produto: Produto = new Produto()
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.cpf

  constructor(private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    private usuarioService: UsuarioService,
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

  comprar() {
    this.usuarioService.comprar(this.idProduto, environment.cpf).subscribe(() => {
    })
  }

  favoritar() {
    this.usuarioService.favoritar(this.idProduto, environment.cpf).subscribe(() => {
      this.alertas.showAlertSuccess('Um novo queridinho foi adicionado')
    })
  }
}