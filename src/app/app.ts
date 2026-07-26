import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaContadoresPage } from "./features/contador/pages/lista-contadores-page/lista-contadores-page";
import { ContadorPage } from './features/contador/pages/contador-page/contador-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContadorPage, ListaContadoresPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('contador');
}
