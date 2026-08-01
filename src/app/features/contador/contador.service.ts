import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contador } from "./models/contador";
import { PostContadorRequest } from "./models/PostContadorRequest ";
import { PutContadorRequest } from './models/PutContadorRequest ';

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

  atualizarContador(id: string, contador: PutContadorRequest) {
    return this.http.put<Contador>(this.apiUrl, contador);
  }
}
