import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorPage } from './features/contador/pages/contador-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContadorPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('contador');
}
