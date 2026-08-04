import { Component, input } from '@angular/core';

@Component({
  selector: 'app-limite',
  imports: [],
  templateUrl: './limite.html',
  styleUrl: './limite.scss',
})
export class Limite {
  readonly nome = input.required<string | number | null>();
  readonly valor = input.required<string | number | null>();
  readonly comBackground = input<boolean>(false);
}
