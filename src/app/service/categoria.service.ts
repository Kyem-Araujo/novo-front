import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categoria', this.token)
  }

  getByIdCategoria(idCategoria: number): Observable<Categoria> {
    return this.http.get<Categoria>(`http://localhost:8080/categoria/${idCategoria}`, this.token)
  }

  getByDepartamento(departamento: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`http://localhost:8080/categoria/departamento/${departamento}`, this.token)
  }

  criarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('http://localhost:8080/categoria', categoria, this.token)
  }

  alterarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('http://localhost:8080/categoria', categoria, this.token)
  }

  deletarCategoria( idCategoria: number) {
    return this.http.delete<Categoria>(`http://localhost:8080/categoria/${idCategoria}`, this.token)
  }
}
