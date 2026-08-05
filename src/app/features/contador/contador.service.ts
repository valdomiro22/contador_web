import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contador } from './models/contador';
import { PostContadorRequest } from './models/PostContadorRequest ';
import { PatchContadorRequest } from './models/PatchContadorRequest';
import { Movimentacao } from '../movimentacao/models/movimentacao';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  private readonly apiUrl = 'http://localhost:8080/contador';

  constructor(private http: HttpClient) {}

  buscarListaContadores(): Observable<Contador[]> {
    return this.http.get<Contador[]>(this.apiUrl);
  }

  findById(id: string): Observable<Contador> {
    return this.http.get<Contador>(`${this.apiUrl}/${id}`);
  }

  adicionarContador(contador: PostContadorRequest) {
    return this.http.post<Contador>(this.apiUrl, contador);
  }

  incrementarContador(id: string) {
    return this.http.patch<Contador>(`${this.apiUrl}/${id}/incrementar`, null);
  }

  decrementarContador(id: string) {
    return this.http.patch<Contador>(`${this.apiUrl}/${id}/decrementar`, null);
  }

  resetContador(id: string) {
    return this.http.patch<Contador>(`${this.apiUrl}/${id}/reset`, null);
  }

  atualizacaoParcial(id: string, request: PatchContadorRequest): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, request);
  }

  deletarContador(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  historico(id: string) {
    return this.http.get<Movimentacao[]>(`${this.apiUrl}/${id}/movimentacoes`);
  }
}
