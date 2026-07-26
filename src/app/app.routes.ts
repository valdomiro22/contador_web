import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contador',
    loadChildren: () =>
      import('./features/contador/contador.routes')
        .then(arquivoDeRotas => arquivoDeRotas.CONTADOR_ROUTES),
  },
  {
    path: '',
    redirectTo: 'contador',
    pathMatch: 'full',
  }
];
