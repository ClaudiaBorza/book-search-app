import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingSpinnerService } from '../../../../shared/components/loading-spinner/loading-spinner.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'bs-wishlist-page',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  myWishlist;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _searchService: SearchService,
              private _loadingSpinner: LoadingSpinnerService) {
    this.myWishlist = this._route.snapshot.data['defaultData'];
    this._loadingSpinner.hide();
    console.log(this.myWishlist);
  }


  removeBookFromList(book: any) {
    this._searchService.removeFromLocalList(book.id);
    this.myWishlist = this._searchService.getLocalList();
  }

  navigateToMainPage() {
    this._router.navigate(['/overview']);

  }
}
