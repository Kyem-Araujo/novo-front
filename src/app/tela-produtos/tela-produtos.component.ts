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

}
