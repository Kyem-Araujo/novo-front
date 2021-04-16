import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  pesquisa: string
  listaProdutos: Produto[]
  listaUsuario: Usuario[]
  listaCategoria: Categoria[]
  modeloOrdenado: string


  key = 'data'
  reverse = true
  

  constructor(
    private alertas: AlertasService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private userService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    window.scroll (0,0)

    this.pesquisa = this.route.snapshot.params['search']
    this.getByNomeProduto(this.pesquisa)
    this.getByNomeUsuario(this.pesquisa)
    this.getByDepartamento(this.pesquisa)
  }

  getByDepartamento (pesquisa: string) {
    this.categoriaService.getByDepartamento(pesquisa).subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  getByNomeProduto (titulo: string) {
    this.produtoService.getByNomeProduto(titulo).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  getByNomeUsuario(usuario: string) {
    this.userService.getByNomeUsuario(usuario).subscribe((resp: Usuario[]) => {
    this.listaUsuario = resp
    })
  }

  naoEncontrado(){
    if (this.listaUsuario.length == 0 && this.listaProdutos.length == 0 && this.listaCategoria.length == 0){
      this.alertas.showAlertInfo("Desculpe, não conseguimos encontrar o que você procura :(")
    }
  }

  organizar() {

    if (this.modeloOrdenado == '' || this.modeloOrdenado == 'padraozinho') {
      this.padrao()
    }
    else if (this.modeloOrdenado == 'alfabetico') {
      this.alfabetoComeco()
    }
    else if (this.modeloOrdenado == 'alfabeticoInverso') {
      this.alfabetoFim()
    }
    else if (this.modeloOrdenado == 'menorPreco') {
      this.menorPreco()
    }
    else if (this.modeloOrdenado == 'maiorPreco') {
      this.maiorPreco()
    }

  }

  padrao() {
    this.key = 'idProduto';
    this.reverse = true;
  }

  alfabetoComeco() {
    this.key = 'nomeProduto';
    this.reverse = false;
  }

  alfabetoFim() {
    this.key = 'nomeProduto';
    this.reverse = true;
  }

  maiorPreco() {
    this.key = 'preco';
    this.reverse = true;
  }

  menorPreco() {
    this.key = 'preco';
    this.reverse = false;
  }

}
