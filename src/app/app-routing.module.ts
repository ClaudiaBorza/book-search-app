import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './pages/landing-page/landing.component';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingComponent,
    data: {title: 'Landing page'}
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/search-page/search.module').then(m => m.SearchModule),
    data: {title: 'Search'}
  },
  {
    path: '**',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
