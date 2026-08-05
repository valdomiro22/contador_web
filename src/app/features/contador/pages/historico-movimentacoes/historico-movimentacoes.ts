import { Component, inject, OnInit, signal } from '@angular/core';
import { ContadorService } from '../../contador.service';
import { ActivatedRoute } from '@angular/router';
import { Movimentacao } from '../../../movimentacao/models/movimentacao';
import { ItemMovimentacao } from '../../components/item-movimentacao/item-movimentacao';

@Component({
  selector: 'app-historico-movimentacoes',
  imports: [ItemMovimentacao],
  templateUrl: './historico-movimentacoes.html',
  styleUrl: './historico-movimentacoes.scss',
})
export class HistoricoMovimentacoes implements OnInit {
  private readonly contadorService = inject(ContadorService);
  private readonly route = inject(ActivatedRoute);

  movimentacoes = signal<Movimentacao[]>([]);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      console.error('ID do contador não encontrado na rota');
      return;
    }

    this.buscarMovimentacoes(id);
  }

  private buscarMovimentacoes(id: string): void {
    this.contadorService.historico(id).subscribe({
      next: (listaRecebida) => {
        this.movimentacoes.set(listaRecebida);
        console.log('movimentacoes: ', this.movimentacoes());
      },
      error: (erro) => {
        console.error('Erro ao buscar movimentações:', erro);
      },
    });
  }
}
