import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemListaContador } from '../../components/item-lista-contador/item-lista-contador';
import { ContadorService } from '../../contador.service';
import { Contador } from '../../models/contador';
import { RouterLink } from '@angular/router';
import { MenuOpcoes } from '../../components/menu-opcoes/menu-opcoes';

@Component({
  selector: 'app-lista-contadores-page',
  imports: [ItemListaContador, RouterLink, MenuOpcoes],
  templateUrl: './lista-contadores-page.html',
  styleUrls: ['./lista-contadores-page.scss'],
})
export class ListaContadoresPage implements OnInit {
  private readonly service = inject(ContadorService);

  readonly contadores = signal<Contador[]>([]);

  ngOnInit() {
    this.service.buscarListaContadores().subscribe({
      next: (contadoresRecebidos) => {
        this.contadores.set(contadoresRecebidos);
      },
      error: (erro) => {
        console.error('Erro ao buscar contadores:', erro);
      },
    });
  }
}
