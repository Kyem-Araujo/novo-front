import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent implements OnInit {
 
   categoria: Categoria = new Categoria()
 
   constructor(
     private categoriaService: CategoriaService,
     private alerta: AlertasService,
     private router: Router
   ) { }

  ngOnInit(){
  }

  criarCategoria(){
    if(environment.token==''){
      this.alerta.showAlertDanger('Você não está logado')
    }else{
      this.categoriaService.criarCategoria(this.categoria).subscribe((resp:Categoria)=> {
        this.categoria
        this.router.navigate(['/paginaInicial'])
      })
    }
    
  }
}