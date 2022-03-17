import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPageComponent,
    data: {title: 'Landing page'}
  },
  {
    path: 'book-search',
    loadChildren: () => import('./pages/search-page/book-search.module').then(m => m.BookSearchModule),
    data: {title: 'global.menu.preorder.collectionArticles'}
  },
  {
    path: '**',
    redirectTo: '/collection/presentation',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
