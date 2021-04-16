import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {

  nomeUsuario = environment.nomeUsuario
  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  id: number =0
  search: string

  constructor(private router: Router) { }
  

  ngOnInit(): void {
  }



  sair() {
    this.router.navigate(['/paginaInicial'])
    environment.token = ''
    environment.cpf = ''
    environment.emailUsuario = ''
    environment.nomeCompletoUsuario = ''
    environment.nomeSocial = ''
    environment.nomeUsuario = ''
    environment.senhaUsuario = ''
  }

  para1() {
    this.id = 1
  }

  para2() {
    this.id = 2
  }

  para3() {
    this.id = 3
  }

  para4() {
    this.id = 4
  }

  para5() {
    this.id = 5
  }

  campoPesquisa(event: any){
    this.search = event.target.value
  }

  pesquisar(){
    this.router.navigate(['/pesquisa', this.search])    
  }
}