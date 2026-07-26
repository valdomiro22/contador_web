import { Routes } from "@angular/router";
import { AppRoutePaths } from "../../core/routes/app-route-paths";

export const CONTADOR_ROUTES: Routes = [
  {
    path: AppRoutePaths.listaContadores,
    loadComponent: () =>
      import('./pages/lista-contadores-page/lista-contadores-page')
        .then(component => component.ListaContadoresPage),
  },
  {
    path: AppRoutePaths.contadorPage,
    loadComponent: () =>
      import('./pages/contador-page/contador-page')
        .then(component => component.ContadorPage),
  },
  {
    path: AppRoutePaths.adicionarContador,
    loadComponent: () =>
      import('./pages/adicionar-contador-page/adicionar-contador-page')
        .then(component => component.AdicionarContadorPage),
  },
  {
    path: AppRoutePaths.editarContador,
    loadComponent: () =>
      import('./pages/editar-contador-page/editar-contador-page')
        .then(component => component.EditarContadorPage),
  },
  {
    path: AppRoutePaths.configuracoesContador,
    loadComponent: () =>
      import('./pages/configuracoes-contador-page/configuracoes-contador-page')
        .then(component => component.ConfiguracoesContadorPage),
  },
  {
    path: AppRoutePaths.detalhesContador,
    loadComponent: () =>
      import('./pages/detalhes-contador-page/detalhes-contador-page')
        .then(component => component.DetalhesContadorPage),
  },
]