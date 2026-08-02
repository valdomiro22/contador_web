import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InserirValorDialog } from '../../components/inserir-valor-dialog/inserir-valor-dialog';
import { ItemConfiguracao } from '../../components/item-configuracao/item-configuracao';
import { ContadorService } from '../../contador.service';
import { Contador } from '../../models/contador';
import { AlertaDialog } from '../../components/alerta-dialog/alerta-dialog';

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
  private readonly router = inject(Router);

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
        console.log('Contador recebido:', contadorRecebido);
        console.log('Nome recebido:', contadorRecebido.nome);

        this.contador.set(contadorRecebido);
      },
      error: (erro) => {
        console.error('Erro ao buscar contador:', erro);
      },
    });
  }

  abrirAlerta(): void {
    const dialogRef = this.dialog.open(AlertaDialog);

    dialogRef.afterClosed().subscribe((confirmou) => {
      if (confirmou) {
        this.deletar();
      }
    });
  }

  abrirDialogMeta(campo: string, titulo: string, valorAtual: string | number): void {
    const dialogRef = this.dialog.open(InserirValorDialog, {
      width: '400px',
      height: '250px',
      data: { campo, titulo, valorAtual },
    });

    dialogRef.afterClosed().subscribe((valor) => {
      if (valor === undefined || valor === null || valor === '') {
        return;
      }

      if (campo === 'nome') {
        this.atualizarNome(String(valor));
      }

      if (campo === 'valor-atual') {
        this.atualizarValorAtual(Number(valor));
      }

      if (campo === 'valor-minimo') {
        this.atualizarValorMinimo(Number(valor));
      }

      if (campo === 'valor-maximo') {
        this.atualizarValorMaximo(Number(valor));
      }

      if (campo === 'meta') {
        this.atualizarValorMeta(Number(valor));
      }

      if (campo === 'incremento') {
        this.atualizarIncremento(Number(valor));
      }

      if (campo === 'decremento') {
        this.atualizarDecremento(Number(valor));
      }
    });
  }

  private atualizarNome(nome: string): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { nome }).subscribe({
      next: () => {
        this.contador.update((contador) => (contador ? { ...contador, nome } : null));
        console.log('Atualizado: nome do contador');
      },
      error: (erro) => {
        console.error('Erro ao atualizar nome:', erro);
      },
    });
  }

  private atualizarValorAtual(valorAtual: number): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { valorAtual }).subscribe({
      next: () => {
        this.contador.update((contador) => (contador ? { ...contador, valorAtual } : null));
        console.log('Atualizado: valor atual');
      },
      error: (erro) => {
        console.error('Erro ao atualizar valor atual:', erro);
      },
    });
  }

  private atualizarValorMinimo(valorMinimo: number): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { valorMinimo: valorMinimo }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, valorMinimo: valorMinimo } : null,
        );
        console.log('Atualizado: valor minimo');
      },
      error: (erro) => {
        console.error('Erro ao atualizar valor minimo:', erro);
      },
    });
  }

  private atualizarValorMaximo(valorMaximo: number): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { valorMaximo: valorMaximo }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, valorMaximo: valorMaximo } : null,
        );
        console.log('Atualizado: valor maximo');
      },
      error: (erro) => {
        console.error('Erro ao atualizar valor maximo:', erro);
      },
    });
  }

  private atualizarValorMeta(meta: number): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { meta: meta }).subscribe({
      next: () => {
        this.contador.update((contador) => (contador ? { ...contador, meta: meta } : null));
        console.log('Atualizado: meta');
      },
      error: (erro) => {
        console.error('Erro ao atualizar meta:', erro);
      },
    });
  }

  private atualizarIncremento(incremento: number): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { incremento: incremento }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, incremento: incremento } : null,
        );
        console.log('Atualizado: incremento');
      },
      error: (erro) => {
        console.error('Erro ao atualizar incremento:', erro);
      },
    });
  }

  private atualizarDecremento(decremento: number): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { decremento: decremento }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, decremento: decremento } : null,
        );
        console.log('Atualizado: decremento');
      },
      error: (erro) => {
        console.error('Erro ao atualizar decremento:', erro);
      },
    });
  }

  atualizarOperacaoPrincipal(operacao: boolean): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { subtracaoComoPrincipal: operacao }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, subtracaoComoPrincipal: operacao } : null,
        );
        console.log('Atualizado: operação principal');
      },
      error: (erro) => {
        console.error('Erro ao atualizar operação principal:', erro);
      },
    });
  }

  mostrarBotaoReset(mostrar: boolean): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { mostrarBotaoReset: mostrar }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, mostrarBotaoReset: mostrar } : null,
        );
        console.log('Atualizado: mostrar botão reset');
      },
      error: (erro) => {
        console.error('Erro ao atualizar mostrar botão reset:', erro);
      },
    });
  }

  mostrarBotaoEditar(mostrar: boolean): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { mostrarBotaoEditar: mostrar }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, mostrarBotaoEditar: mostrar } : null,
        );
        console.log('Atualizado: mostrar botão editar');
      },
      error: (erro) => {
        console.error('Erro ao atualizar mostrar botão editar:', erro);
      },
    });
  }

  mostrarBotaoLimites(mostrar: boolean): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { mostrarLimites: mostrar }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, mostrarLimites: mostrar } : null,
        );
        console.log('Atualizado: mostrar botão limites');
      },
      error: (erro) => {
        console.error('Erro ao atualizar mostrar botão limites:', erro);
      },
    });
  }

  confirmarAntesResetar(confirmar: boolean): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { confirmarAntesResetar: confirmar }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, confirmarAntesResetar: confirmar } : null,
        );
        console.log('Atualizado: confirmar antes de resetar');
      },
      error: (erro) => {
        console.error('Erro ao atualizar confirmar antes de resetar:', erro);
      },
    });
  }

  efeitoAoClicar(efeito: boolean): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.atualizacaoParcial(id, { efeitoVisualAoClicar: efeito }).subscribe({
      next: () => {
        this.contador.update((contador) =>
          contador ? { ...contador, efeitoVisualAoClicar: efeito } : null,
        );
        console.log('Atualizado: mostrar efeito ao clicar');
      },
      error: (erro) => {
        console.error('Erro ao atualizar mostrar efeito ao clicar:', erro);
      },
    });
  }

  deletar(): void {
    const id = this.contador()?.id;

    if (!id) return;

    this.contadorService.deletarContador(id).subscribe({
      next: () => {
        this.console.log('Contador deletado');

        void this.router.navigateByUrl('/contador', {
          replaceUrl: true,
        });
      },
      error: (erro) => {
        console.error('Erro ao deletar contador:', erro);
      },
    });
  }

  protected readonly console = console;
}
