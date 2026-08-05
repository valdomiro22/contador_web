import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-item-movimentacao',
  imports: [DatePipe],
  templateUrl: './item-movimentacao.html',
  styleUrl: './item-movimentacao.scss',
})
export class ItemMovimentacao {
  readonly tipo = input.required<string>();
  readonly quantidade = input.required<number>();
  readonly horario = input.required<string>();
}
