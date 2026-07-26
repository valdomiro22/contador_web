import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemListaContador } from '../../components/item-lista-contador/item-lista-contador';
import { ContadorService } from '../../contador.service';
import { Contador } from '../../models/contador';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contadores-page',
  imports: [ItemListaContador, RouterLink],
  templateUrl: './lista-contadores-page.html',
  styleUrls: ['./lista-contadores-page.scss']
})
export class ListaContadoresPage implements OnInit {

  private readonly service = inject(ContadorService);

  nome = 'nome para teste';
  nomeRecebidoDoService = this.service.nomeNoService;

  readonly contadores = signal<Contador[]>([]);

  ngOnInit(): void {
    this.service.buscarContador().subscribe({
      next: contadoresRecebidos => {
        console.log(contadoresRecebidos);
        this.contadores.set(contadoresRecebidos);
      },
      error: erro => {
        console.error('Erro ao buscar contadores:', erro);
      }
    });
  }
}