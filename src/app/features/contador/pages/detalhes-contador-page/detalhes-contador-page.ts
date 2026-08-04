import { Component, inject, OnInit, signal } from '@angular/core';
import { CardDetalhes } from "../../components/card-detalhes/card-detalhes";
import { MatIcon } from "@angular/material/icon";
import { ContadorService } from '../../contador.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Contador } from '../../models/contador';
import { AlertaDialog } from '../../components/alerta-dialog/alerta-dialog';

@Component({
  selector: 'app-detalhes-contador-page',
  imports: [CardDetalhes, MatIcon],
  templateUrl: './detalhes-contador-page.html',
  styleUrl: './detalhes-contador-page.scss',
})
export class DetalhesContadorPage implements OnInit{
  private readonly contadorService = inject(ContadorService);
  private readonly route = inject(ActivatedRoute);
  readonly contador = signal<Contador | null>(null);

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
