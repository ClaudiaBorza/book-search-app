import { Component } from '@angular/core';
import { ISearchOptions, SEARCH_OPTIONS } from '../../search-interfaces';

@Component({
  selector: 'bs-search-page',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent {
  searchOptions: ISearchOptions[] = SEARCH_OPTIONS;
  availableBooks: any[] = [];
  selectedOption = null;
  startIndex = 0;

  selectSearchParam(option: any) {
    this.selectedOption = option.param;
    this.availableBooks = [];
  }

  updateList(event: { emptyList: any; items: any[]; }) {
    if (event.emptyList) {
      this.availableBooks = event.items;
    } else {
      this.availableBooks = [...this.availableBooks, ...event.items];
    }
    console.log(this.availableBooks);
    console.log(event);
  }

  updateDynamicCustomersScroll() {
    this.startIndex = this.availableBooks.length;
  }

  openDialogInfo(book: any) {

  }
}
