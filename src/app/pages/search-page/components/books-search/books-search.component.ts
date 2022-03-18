import { Component } from '@angular/core';
import { ISearchOptions, SEARCH_OPTIONS } from '../../search-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { LoadingSpinnerService } from '../../../../shared/components/loading-spinner/loading-spinner.service';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog,
              private _router: Router,
              private _loadingSpinner: LoadingSpinnerService) {
  }

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
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '80vw',
      data: book
    });

    dialogRef.afterClosed().subscribe((goToWishlist) => {
      if (!goToWishlist) {
        this._loadingSpinner.hide();
        return;
      }
      this._router.navigateByUrl('/overview/wishlist', {});
    });
  }
}
