import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SearchService } from '../../search.service';
import { LoadingSpinnerService } from '../../../../shared/components/loading-spinner/loading-spinner.service';

@Component({
  selector: 'bs-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _searchService: SearchService,
              private _loadingSpinner: LoadingSpinnerService) {
  }

  addToWishList(book: any) {
    this._loadingSpinner.show();
    /* Could not do the authentication with APYKey
       this._searchService
          .addToWishlist(id)
          .subscribe()*/

    setTimeout(() => {
      this._searchService.addToLocalList(book);
      this.dialogRef.close(true);
    }, 2000);
  }
}
