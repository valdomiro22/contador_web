import { Component } from '@angular/core';
import { CardDetalhes } from "../../components/card-detalhes/card-detalhes";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-detalhes-contador-page',
  imports: [CardDetalhes, MatIcon],
  templateUrl: './detalhes-contador-page.html',
  styleUrl: './detalhes-contador-page.scss',
})
export class DetalhesContadorPage {}
