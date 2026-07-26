import { Component, input } from "@angular/core";
import { Contador } from "../../models/contador";

@Component({
    selector: 'app-contador-display',
    imports: [],
    templateUrl: './contador-display.html',
    styleUrls: ['./contador-display.scss'],
})
export class ContadorDisplay {
    readonly contador = input.required<Contador>()

    formatarValor(valor: number): string {
        return valor.toString().padStart(6, '0')
    }
}