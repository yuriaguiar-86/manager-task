import { ViewComponent } from './requests/view/view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './requests/forms/forms.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'requests/add', component: FormsComponent },
  { path: 'requests/edit/:id', component: FormsComponent },
  { path: 'requests/view/:id', component: ViewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
