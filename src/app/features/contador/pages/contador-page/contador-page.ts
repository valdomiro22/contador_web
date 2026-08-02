import { Component, inject, OnInit, signal } from '@angular/core';
import { ContadorDisplay } from '../../components/contador-display/contador-display';
import { BotaoAdicionar } from '../../components/botao-adicionar/botao-adicionar';
import { BotaoSubtrair } from '../../components/botao-subtrair/botao-subtrair';
import { ContadorService } from '../../contador.service';
import { Contador } from '../../models/contador';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MenuOpcoes } from '../../components/menu-opcoes/menu-opcoes';
import { MatDialog } from '@angular/material/dialog';
import { AlertaDialog } from '../../components/alerta-dialog/alerta-dialog';
import { Limite } from "../../components/limite/limite";

@Component({
  selector: 'app-contador-page',
  imports: [ContadorDisplay, BotaoAdicionar, BotaoSubtrair, MatIcon, RouterLink, MenuOpcoes, Limite],
  templateUrl: './contador-page.html',
  styleUrls: ['./contador-page.scss'],
})
export class ContadorPage implements OnInit {
  private readonly contadorService = inject(ContadorService);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);
  readonly contador = signal<Contador | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      console.error('ID do contador não encontrado na rota');
      return;
    }

    this.buscarContador(id);
  }

  abrirAlerta(): void {
    const dialogRef = this.dialog.open(AlertaDialog);

    dialogRef.afterClosed().subscribe((confirmou) => {
      if (confirmou) {
        this.resetar();
      }
    });
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

  incrementar() {
    const contadorAtual = this.contador();

    if (!contadorAtual) return;

    this.contadorService.incrementarContador(contadorAtual.id).subscribe({
      next: () => this.buscarContador(contadorAtual.id),
      error: (erro) => console.error('Erro ao incrementar contador:', erro),
    });
  }

  decrementar() {
    const contadorAtual = this.contador();

    if (!contadorAtual) return;

    this.contadorService.decrementarContador(contadorAtual.id).subscribe({
      next: () => this.buscarContador(contadorAtual.id),
      error: (erro) => console.error('Erro ao decrementar contador:', erro),
    });
  }

  resetar() {
    const contadorAtual = this.contador();

    if (!contadorAtual) return;

    this.contadorService.resetContador(contadorAtual.id).subscribe({
      next: () => this.buscarContador(contadorAtual.id),
      error: (erro) => console.error('Erro ao resetar contador:', erro),
    });
  }
}
