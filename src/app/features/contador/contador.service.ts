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

  buscarContador(): Observable<Contador[]> {
    return this.http.get<Contador[]>(this.apiUrl)
  }
  
  adicionarContador(contador: PostContadorRequest) {
    return this.http.post<Contador>(this.apiUrl, contador)
  }
}