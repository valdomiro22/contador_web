import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-item-configuracao',
  imports: [MatIconModule, MatSlideToggle],
  templateUrl: './item-configuracao.html',
  styleUrl: './item-configuracao.scss',
})
export class ItemConfiguracao {
  readonly icone1 = input.required<string>();
  readonly descricao = input.required<string>();
  readonly valor = input<string | number | null>();
  readonly icone2 = input.required<string>();
  readonly botao = input.required<boolean>();

  readonly switchAtivo = input<boolean>(false);

  readonly clicouIcone2 = output<void>();
  readonly onChangedSwitch = output<boolean>();

  aoClicarIcone2(): void {
    this.clicouIcone2.emit();
  }

  aoAlterarSwitch(evento: MatSlideToggleChange): void {
    this.onChangedSwitch.emit(evento.checked);
  }
}