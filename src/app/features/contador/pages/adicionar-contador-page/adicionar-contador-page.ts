import { Component, inject } from "@angular/core";
import { ReactiveFormsModule, Validators, FormBuilder } from "@angular/forms";
import { ContadorService } from "../../contador.service";
import { validate } from "@angular/forms/signals";

@Component({
    selector: 'app-adicionar-contador-page',
      imports: [
        ReactiveFormsModule,
      ],
      templateUrl: './adicionar-contador-page.html',
      styleUrls: ['./adicionar-contador-page.scss'],
})
export class AdicionarContadorPage {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contadorService = inject(ContadorService);

  formulario = this.formBuilder.nonNullable.group({
    nome: ['', [
      Validators.required,
      Validators.maxLength(100)
    ]], 

    valorAtual: [0, [
      Validators.required
    ]],

    incremento: [1, [
      Validators.required,
      Validators.min(1)
    ]],

    decremento: [1, [
      Validators.required,
      Validators.min(1)
    ]],

    valorInicial: [0],
    valorMinimo: [0],
    valorMaximo: this.formBuilder.control<number | null>(null),
    meta: this.formBuilder.control<number | null>(null),
  })

  adicionar() {
    console.log('adicionar contador')
  }
}