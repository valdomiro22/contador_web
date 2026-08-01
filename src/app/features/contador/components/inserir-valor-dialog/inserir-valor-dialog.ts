import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-inserir-valor-dialog',
  imports: [
    MatDialogClose,
    MatDialogActions,
    FormsModule,
    MatDialogContent,
    MatLabel,
    MatFormField,
    MatInput,
    MatDialogTitle,
    MatButton,
  ],
  templateUrl: './inserir-valor-dialog.html',
  styleUrl: './inserir-valor-dialog.scss',
})
export class InserirValorDialog {
  readonly data = inject<{
    campo: string;
    titulo: string;
    valorAtual: number | null;
  }>(MAT_DIALOG_DATA);

  private readonly dialogRef = inject(MatDialogRef<InserirValorDialog, number>);

  valor: number | null = this.data.valorAtual;

  salvar(): void {
    if (this.valor === null) {
      return;
    }

    this.dialogRef.close(this.valor);
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
