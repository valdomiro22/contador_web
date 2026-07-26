import { Component } from '@angular/core';
import { ContadorDisplay } from '../../components/contador-display/contador-display';
import { BotaoAdicionar } from '../../components/botao-adicionar/botao-adicionar';
import { BotaoSubtrair } from '../../components/botao-subtrair/botao-subtrair';

@Component({
  selector: 'app-contador-page',
  imports: [
    ContadorDisplay,
    BotaoAdicionar,
    BotaoSubtrair
  ],
  templateUrl: './contador-page.html',
  styleUrls: ['./contador-page.scss'],
})
export class ContadorPage {

}