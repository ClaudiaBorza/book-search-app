import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { SearchRoutingModule } from './search-routing.module';
import { TypeaheadModule } from '../../shared/components/typeahead/typeahead.module';
import { SearchPageComponent } from './search-page.component';
import { WishlistComponent } from './components/wishlist-page/wishlist.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    SearchPageComponent,
    BooksSearchComponent,
    WishlistComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    TypeaheadModule,
    MatRadioModule,
    MatListModule,
    ScrollingModule,
    InfiniteScrollModule
  ],
})
export class SearchModule {
}
