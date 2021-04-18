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
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  key = 'data'
  reverse = true
  categoria: Categoria = new Categoria
  idCategoria: number
  modeloOrdenado: string

  constructor(private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private alertas: AlertasService) { }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }
  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
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


