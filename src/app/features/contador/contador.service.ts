import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contador } from "./models/contador";
import { PostContadorRequest } from "./models/PostContadorRequest ";

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private readonly apiUrl = 'http://localhost:8080/contador';

  constructor(private http: HttpClient) { }

  nomeNoService = 'Nome no service'

  buscarListaContadores(): Observable<Contador[]> {
    return this.http.get<Contador[]>(this.apiUrl)
  }

  buscarContador(id: string): Observable<Contador> {
    return this.http.get<Contador>(`${this.apiUrl}/${id}`)
  }
  
  adicionarContador(contador: PostContadorRequest) {
    return this.http.post<Contador>(this.apiUrl, contador)
  }
  
  incrementarContador(id: string) {
    return this.http.patch<Contador>(`${this.apiUrl}/${id}/incrementar`, null)
  }
  
  decrementarContador(id: string) {
    return this.http.patch<Contador>(`${this.apiUrl}/${id}/decrementar`, null)
  }
}