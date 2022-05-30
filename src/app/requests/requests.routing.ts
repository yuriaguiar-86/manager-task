import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'requests/add', component: FormsComponent },
  { path: 'edit', component: FormsComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const RequestsRoutes = RouterModule.forChild(routes);
