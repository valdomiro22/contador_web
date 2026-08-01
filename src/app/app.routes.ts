import { Routes } from '@angular/router';
import { AppRoutePaths } from './core/routes/app-route-paths';

export const routes: Routes = [
  {
    path: AppRoutePaths.contador,
    loadChildren: () =>
      import('./features/contador/contador.routes').then((m) => m.CONTADOR_ROUTES),
  },
  {
    path: '',
    redirectTo: AppRoutePaths.contador,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: AppRoutePaths.contador,
  },
];
