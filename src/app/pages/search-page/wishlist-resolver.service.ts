import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { SearchService } from './search.service';
import { LoadingSpinnerService } from '../../shared/components/loading-spinner/loading-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class WishListResolver implements Resolve<any> {

  constructor(private _searchService: SearchService,
              private _loadingSpinner: LoadingSpinnerService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    this._loadingSpinner.show();

    return this._searchService.getLocalList();
  }

}
