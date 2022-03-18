export interface ISearchOptions {
  param: string;
  name: string;
}

export interface ISearchResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

export const SEARCH_OPTIONS: ISearchOptions[] = [
  {
    param: 'all',
    name: 'All'
  }, {
    param: 'books',
    name: 'Books'
  }, {
    param: 'magazines',
    name: 'Magazines'
  }
];

