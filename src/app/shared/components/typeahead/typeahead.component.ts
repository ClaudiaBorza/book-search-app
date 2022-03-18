import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, of, Subject, switchMap, tap } from 'rxjs';
import { SearchService } from '../../../pages/search-page/search.service';


@Component({
  selector: 'bs-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeaheadComponent {
  @Output() updateBookList = new EventEmitter<{ items: any[], emptyList: boolean }>();
  searchInput = new FormControl(null);
  isSearching = false;
  private searchBooks$: Subject<any> = new Subject();

  constructor(private _searchService: SearchService) {

    this.searchInput
      .valueChanges
      .subscribe((inputValue) => {
        this._searchService.setRequestParam('q', inputValue);
        if (inputValue === null || inputValue === '') {
          this.updateBookList.emit({items: [], emptyList: true});
        } else {
          this.isSearching = true;
          this.searchBooks$.next(true);
        }
      });

    this.searchBooks$
      .pipe(
        switchMap((emptyList) => {
          return this._searchService
            .searchBooks()
            .pipe(
              tap((response) => {
                this.updateBookList.emit({items: response, emptyList: emptyList});
              }),
              catchError(() => {
                this.updateBookList.emit({items: [], emptyList: true});
                return of([]);
              }));
        })).subscribe(() => this.isSearching = false);
  }


  @Input()
  set printType(value: string | null) {
    if (value) {
      this._searchService.setRequestParam('printType', value);
      this.searchBooks$.next(false);
    }
  }

  @Input()
  set startIndex(value: number) {
    if (value === 0) {
      return;
    }

    this._searchService.setRequestParam('startIndex', value);
    this.searchBooks$.next(false);
  }

  clearInput() {
    this.isSearching = false;
    this.searchInput.setValue(null);
  }
}
