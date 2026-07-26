import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contador } from "./contador";

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
}