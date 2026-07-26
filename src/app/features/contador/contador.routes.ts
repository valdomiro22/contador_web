import { Routes } from "@angular/router";

export const CONTADOR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/lista-contadores-page/lista-contadores-page')
        .then(component => component.ListaContadoresPage),
  },
  {
    path: 'contador-page/:id',
    loadComponent: () =>
      import('./pages/contador-page/contador-page')
        .then(component => component.ContadorPage),
  },
  {
    path: 'adicionar',
    loadComponent: () =>
      import('./pages/adicionar-contador-page/adicionar-contador-page')
        .then(component => component.AdicionarContadorPage),
  },
  {
    path: 'editar/:id',
    loadComponent: () =>
      import('./pages/editar-contador-page/editar-contador-page')
        .then(component => component.EditarContadorPage),
  },
  {
    path: 'configuracoes/:id',
    loadComponent: () =>
      import('./pages/configuracoes-contador-page/configuracoes-contador-page')
        .then(component => component.ConfiguracoesContadorPage),
  },
  {
    path: 'detalhes/:id',
    loadComponent: () =>
      import('./pages/detalhes-contador-page/detalhes-contador-page')
        .then(component => component.DetalhesContadorPage),
  },
]