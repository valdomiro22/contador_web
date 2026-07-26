import { Component, inject, OnInit, signal } from '@angular/core';
import { ContadorService } from '../../service/contador.service';
import { Contador } from '../../models/contador';
import { ItemListaContador } from '../../components/item-lista-contador/item-lista-contador';

@Component({
  selector: 'app-lista-contadores-page',
  imports: [ItemListaContador],
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