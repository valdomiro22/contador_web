import { Component, effect, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao-adicionar',
  imports: [MatIconModule],
  templateUrl: './botao-adicionar.html',
  styleUrl: './botao-adicionar.scss',
})
export class BotaoAdicionar {
  readonly clicou = output();
  readonly isPrincipal = input.required<boolean>();

  constructor() {
    effect(() => {
      console.log('isPrincipal:', this.isPrincipal());
    });
  }
}
