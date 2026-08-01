import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-inserir-valor-bottom-sheet',
  imports: [FormsModule, MatFormField, MatLabel, MatButton, MatInput],
  templateUrl: './inserir-valor-bottom-sheet.html',
  styleUrl: './inserir-valor-bottom-sheet.scss',
})
export class InserirValorBottomSheet {
  private readonly bottomSheetRef = inject(MatBottomSheetRef<InserirValorBottomSheet, number>);

  valor = 0;

  cancelar(): void {
    this.bottomSheetRef.dismiss();
  }

  salvar(): void {
    this.bottomSheetRef.dismiss(this.valor);
  }
}
