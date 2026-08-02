import { Component, inject, output } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-alerta-dialog',
  imports: [MatButton, MatDialogActions, MatDialogContent, MatDialogTitle, MatIcon],
  templateUrl: './alerta-dialog.html',
  styleUrl: './alerta-dialog.scss',
})
export class AlertaDialog {
  private readonly dialogRef = inject(MatDialogRef);

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
