import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/usuario', this.token)
  }

  getBycpf(cpf: string): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuario/${cpf}`, this.token)
  }

  getByNomeUsuario(nomeUsuario: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080/usuario/nomeUsuario/${nomeUsuario}`, this.token)
  }

  getByNomeSocial(nomeSocial: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080/usuario/nomeSocial/${nomeSocial}`, this.token)
  }

  getByNomeCompletoUsuario(nomeCompletoUsuario: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080/usuario/nomeCompletoUsuario/${nomeCompletoUsuario}`, this.token)
  }

  getByEmailUsuario(emailUsuario: string): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuario/emailUsuario/${emailUsuario}`, this.token)
  }

  alterarCadastro(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('http://localhost:8080/usuario/alterar/senha', usuario, this.token)
  }

  comprar(idProduto: number, cpfUsuario: string) {
    return this.http.put<Usuario>(`http://localhost:8080/usuario/produto/compra/${idProduto}/${cpfUsuario}`, this.token)

  }

  favoritar(idProduto: number, cpfUsuario: string): Observable<Usuario> {
    return this.http.put<Usuario>(`http://localhost:8080/usuario/produto/favoritar/${idProduto}/${cpfUsuario}`, this.token)

  }

  deletarConta(cpfUsuario: string) {
    return this.http.delete<Usuario>(`http://localhost:8080/usuario/${cpfUsuario}`, this.token) 
  }
}
