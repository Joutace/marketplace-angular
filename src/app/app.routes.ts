import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index/1' },
  {
    path: 'index/:id',
    component: IndexComponent,
  },
  {
    path: '**',
    redirectTo: 'index/1',
  },
];
