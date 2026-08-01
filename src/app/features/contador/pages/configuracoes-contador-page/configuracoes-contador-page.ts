import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemConfiguracao } from '../../components/item-configuracao/item-configuracao';
import { MatDialog } from '@angular/material/dialog';
import { InserirValorDialog } from '../../components/inserir-valor-dialog/inserir-valor-dialog';
import { ContadorService } from '../../contador.service';
import { Contador } from '../../models/contador';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuracoes-contador-page',
  imports: [ItemConfiguracao],
  templateUrl: './configuracoes-contador-page.html',
  styleUrl: './configuracoes-contador-page.scss',
})
export class ConfiguracoesContadorPage implements OnInit {
  private readonly dialog = inject(MatDialog);
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

  abrirDialogMeta(campo: string, titulo: string, valorAtual: string | number): void {
    console.log('Nome:', this.contador()?.nome);

    const dialogRef = this.dialog.open(InserirValorDialog, {
      width: '400px',
      height: '250px',
      data: {
        campo,
        titulo,
        valorAtual,
      },
    });

    dialogRef.afterClosed().subscribe((valor) => {
      if (valor === undefined) {
        return;
      }

      this.atualizarCampo(campo, valor);
    });
  }

  private atualizarCampo(campo: string, valor: string | number): void {
    console.log(`Atualizando: ${campo} para: ${valor}`);
  }
}
