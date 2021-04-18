import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-corpo-home',
  templateUrl: './corpo-home.component.html',
  styleUrls: ['./corpo-home.component.css']
})
export class CorpoHomeComponent implements OnInit {
listaProdutos: Produto[]
key='data'
reverse=true

constructor (private produtoService: ProdutoService) {
}

ngOnInit() {
this.findAllProdutos()


}
findAllProdutos() {
  this.produtoService.getAllProducts().subscribe((resp: Produto[]) =>{
    this.listaProdutos = resp
  })
}
}
