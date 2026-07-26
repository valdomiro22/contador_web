import { Component, inject } from "@angular/core";
import { ReactiveFormsModule, Validators, FormBuilder } from "@angular/forms";
import { ContadorService } from "../../contador.service";
import { Router } from "@angular/router";
import { AppRoutePaths } from "../../../../core/routes/app-route-paths";

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
  private readonly router = inject(Router);

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
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched()
      return
    }

    const contador = this.formulario.getRawValue()

    this.contadorService.adicionarContador(contador).subscribe({
      next: () => {
        console.log('Contador adicionado com sucesso')
        this.formulario.reset()
        this.router.navigate([AppRoutePaths.listaContadores]);
      },
      error: erro => console.log('Erro ao adicionar contador', erro)
    })
  }
}