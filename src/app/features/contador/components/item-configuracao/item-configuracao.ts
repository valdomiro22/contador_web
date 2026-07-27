import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-item-configuracao',
  imports: [MatIconModule, MatSlideToggle],
  templateUrl: './item-configuracao.html',
  styleUrl: './item-configuracao.scss',
})
export class ItemConfiguracao {
  readonly icone1 = input.required<string>();
  readonly descricao = input.required<string>();
  readonly valor = input.required<string>();
  readonly icone2 = input.required<string>();
  readonly botao = input.required<boolean>();
}
