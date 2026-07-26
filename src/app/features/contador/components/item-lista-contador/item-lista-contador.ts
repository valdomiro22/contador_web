import { Component, input } from "@angular/core";
import { Contador } from "../../models/contador";

@Component({
    selector: 'app-item-lista-contador',
    imports: [],
    templateUrl: './item-lista-contador.html',
    styleUrls: ['./item-lista-contador.scss']
})
export class ItemListaContador {
    contador = input.required<Contador>()
}