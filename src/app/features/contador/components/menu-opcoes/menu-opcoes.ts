import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Contador } from '../../models/contador';
import { ContadorService } from '../../contador.service';

@Component({
  selector: 'app-menu-opcoes',
  imports: [RouterLink],
  templateUrl: './menu-opcoes.html',
  styleUrls: ['./menu-opcoes.scss'],
})
export class MenuOpcoes implements OnInit {
  readonly contador = signal<Contador | null>(null);
  private readonly route = inject(ActivatedRoute);
  private readonly contadorService = inject(ContadorService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      console.error('ID do contador não encontrado na rota');
      return;
    }

    this.buscarContador(id);
  }

  private buscarContador(id: string): void {
    this.contadorService.findById(id).subscribe({
      next: (contadorRecebido) => {
        this.contador.set(contadorRecebido);
      },
      error: (erro) => {
        console.error('Erro ao buscar contador:', erro);
      },
    });
  }
}
