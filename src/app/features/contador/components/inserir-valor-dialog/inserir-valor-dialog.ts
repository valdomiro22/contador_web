import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

interface InserirValorDialogData {
  campo: string;
  titulo: string;
  valorAtual: string | number | null;
}

@Component({
  selector: 'app-inserir-valor-dialog',
  imports: [
    FormsModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
  ],
  templateUrl: './inserir-valor-dialog.html',
  styleUrl: './inserir-valor-dialog.scss',
})
export class InserirValorDialog {
  readonly data = inject<InserirValorDialogData>(MAT_DIALOG_DATA);

  private readonly dialogRef = inject(MatDialogRef<InserirValorDialog, string | number>);

  valor: string | number | null = this.data.valorAtual;

  salvar(): void {
    if (this.valor === null || this.valor === '') {
      return;
    }

    this.dialogRef.close(this.valor);
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  get tipoInput(): 'text' | 'number' {
    return this.data.campo === 'nome' ? 'text' : 'number';
  }

  get label(): string {
    return this.data.campo === 'nome' ? 'Nome' : 'Valor';
  }
}
