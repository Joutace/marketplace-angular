import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: '**',
    redirectTo: 'index',
  },
];
