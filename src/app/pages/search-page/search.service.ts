import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ISearchResponse } from './search-interfaces';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  requestParams = {
    maxResults: 20,
    q: null,
    printType: 'all',
    startIndex: 0
  };


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
