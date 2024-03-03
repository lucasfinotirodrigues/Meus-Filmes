import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'detalhes',
    loadComponent: () => import('./detalhes/detalhes.page').then( m => m.DetalhesPage)
  },
  {
    path: 'home-adiamento',
    loadComponent: () => import('./home-adiamento/home-adiamento.page').then( m => m.HomeAdiamentoPage)
  },

];
