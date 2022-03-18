import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { WishlistComponent } from './components/wishlist-page/wishlist.component';
import { SearchPageComponent } from './search-page.component';
import { WishListResolver } from './wishlist-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    children: [
      {
        path: 'books',
        component: BooksSearchComponent,
        data: {title: 'Books'}
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
       resolve: {defaultData: WishListResolver},
        data: {title: 'Wishlist'}
      },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {
}
