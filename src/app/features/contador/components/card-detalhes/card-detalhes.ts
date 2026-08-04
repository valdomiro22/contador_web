import { Component, input } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-card-detalhes',
  imports: [MatIcon],
  templateUrl: './card-detalhes.html',
  styleUrl: './card-detalhes.scss',
})
export class CardDetalhes {
  readonly icone = input.required<string | number>();
  readonly nome = input.required<string | number>();
  readonly valor = input.required<string | number>();
}
