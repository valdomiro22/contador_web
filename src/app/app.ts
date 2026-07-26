import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaContadoresPage } from "./features/contador/pages/lista-contadores-page/lista-contadores-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaContadoresPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('contador');
}
