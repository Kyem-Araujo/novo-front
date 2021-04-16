import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-tela-produtos',
  templateUrl: './tela-produtos.component.html',
  styleUrls: ['./tela-produtos.component.css']
})
export class TelaProdutosComponent implements OnInit {

  produto: Produto = new Produto()
  listaMeusProdutos: Produto[]
  modeloOrdenado: string

  usuario: Usuario = new Usuario()
  idUsuario = environment.cpf
  

  key = 'data'
  reverse = true

  constructor(private produtoService: ProdutoService, 
    private usuarioService:UsuarioService,
    private router: Router) { }
  
  ngOnInit() {
    window.scroll(0,0)
    this.findByCpf()
  }

  findByCpf() {
    this.usuarioService.getBycpf(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
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
