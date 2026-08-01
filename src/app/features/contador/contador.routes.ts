import { Routes } from '@angular/router';
import { AppRoutePaths } from '../../core/routes/app-route-paths';

export const CONTADOR_ROUTES: Routes = [
  {
    path: AppRoutePaths.listaContadores,
    loadComponent: () =>
      import('./pages/lista-contadores-page/lista-contadores-page').then(
        (m) => m.ListaContadoresPage,
      ),
    title: 'Contadores',
  },

  // Deve ficar antes de ":id"
  {
    path: AppRoutePaths.adicionarContador,
    loadComponent: () =>
      import('./pages/adicionar-contador-page/adicionar-contador-page').then(
        (m) => m.AdicionarContadorPage,
      ),
    title: 'Adicionar contador',
  },

  {
    path: AppRoutePaths.editarContador,
    loadComponent: () =>
      import('./pages/editar-contador-page/editar-contador-page').then((m) => m.EditarContadorPage),
    title: 'Editar contador',
  },
  {
    path: AppRoutePaths.configuracoesContador,
    loadComponent: () =>
      import('./pages/configuracoes-contador-page/configuracoes-contador-page').then(
        (m) => m.ConfiguracoesContadorPage,
      ),
    title: 'Configurações',
  },
  {
    path: AppRoutePaths.detalhesContador,
    loadComponent: () =>
      import('./pages/detalhes-contador-page/detalhes-contador-page').then(
        (m) => m.DetalhesContadorPage,
      ),
    title: 'Detalhes',
  },
  {
    path: AppRoutePaths.historicoContador,
    loadComponent: () =>
      import('./pages/historico-movimentacoes/historico-movimentacoes').then(
        (m) => m.HistoricoMovimentacoes,
      ),
    title: 'Histórico',
  },

  // A rota dinâmica deve ficar depois das rotas específicas
  {
    path: AppRoutePaths.contadorPage,
    loadComponent: () => import('./pages/contador-page/contador-page').then((m) => m.ContadorPage),
    title: 'Contador',
  },

  {
    path: '**',
    redirectTo: '',
  },
];
