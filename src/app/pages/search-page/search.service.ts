import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ISearchResponse, MY_WISHLIST } from './search-interfaces';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  APIKey = 'AIzaSyD1clEMdOH-NhFlUtzr4pMSyYokXhCxMf4';
  requestParams = {
    maxResults: 20,
    q: null,
    printType: 'all',
    startIndex: 0
  };
  private _localList = MY_WISHLIST;

  constructor(private _http: HttpClient) {
  }

  searchBooks(): Observable<any[]> {
    let url = `https://www.googleapis.com/books/v1/volumes`;
    let params = this.setRequestParams(this.requestParams);

    return this._http
      .get<ISearchResponse>(url, {params: params})
      .pipe(
        map((response) => response.items)
      );
  }

  addToWishlist(volumeId: any) {
    let url = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=${volumeId}&key=${this.APIKey}`;

    return this._http
      .post(url, '');
  }

  addToLocalList(volume: any) {
    this._localList.push(volume);
  }

  removeFromLocalList(volumeId: any) {
    this._localList = this._localList.filter((volume) => volume.id !== volumeId);
  }

  getLocalList() {
    return this._localList;
  }

  removeFromWishlist(volumeId: any) {
    let url = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/removeVolume?volumeId=${volumeId}&key=${this.APIKey}`;

    return this._http
      .delete(url);
  }

  setRequestParam(param: string, value: any) {
    // @ts-ignore
    this.requestParams[param] = value;
  }

  setRequestParams(requestParams: any) {
    let params = new HttpParams();

    params = params.append('startIndex', requestParams.startIndex);
    params = params.append('maxResults', requestParams.maxResults);

    if (requestParams.printType !== null) {
      params = params.append('printType', requestParams.printType);
    }

    params = params.append('q', requestParams.q);

    return params;
  }

}
