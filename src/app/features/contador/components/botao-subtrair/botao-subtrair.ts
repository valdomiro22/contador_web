import { Component, effect, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao-subtrair',
  imports: [MatIconModule],
  templateUrl: './botao-subtrair.html',
  styleUrl: './botao-subtrair.scss',
})
export class BotaoSubtrair {
  readonly clicou = output()
  readonly isPrincipal = input.required<boolean>();
  
  constructor() {
    effect(() => {
      console.log('isPrincipal:', this.isPrincipal());
    });
  }
  
}
