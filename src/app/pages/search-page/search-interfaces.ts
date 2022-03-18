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


export const MY_WISHLIST = [
  {
    'kind': 'books#volume',
    'id': 'TYpq9GIU80UC',
    'etag': 'DyFEjslVTDs',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/TYpq9GIU80UC',
    'volumeInfo': {
      'title': 'Canadian Journal of Mathematics',
      'publishedDate': '1987-12',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 256,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.0.2.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=TYpq9GIU80UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=TYpq9GIU80UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=TYpq9GIU80UC&pg=PA1464&dq=null&hl=&as_pt=MAGAZINES&cd=1&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=TYpq9GIU80UC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Canadian_Journal_of_Mathematics.html?hl=&id=TYpq9GIU80UC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=TYpq9GIU80UC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'One can picture the set of \u003cb\u003enull\u003c/b\u003e vectors on a two dimensional manifold as a smooth assignment of a cross (the \u003cb\u003enull\u003c/b\u003e cone) to each point in the manifold. If this cross is parallel transported around any closed path, it must come back onto&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': '7R9dfakD130C',
    'etag': 'YLwoxDIzLq0',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/7R9dfakD130C',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-06-14',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 518,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.4.2.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=7R9dfakD130C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=7R9dfakD130C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=7R9dfakD130C&pg=PA350&dq=null&hl=&as_pt=MAGAZINES&cd=2&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=7R9dfakD130C&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=7R9dfakD130C'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=7R9dfakD130C&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'if ((hLib = LoadLibrary (szDriver)) &lt; HINSTANCE_ERROR) * Input parameters: return \u003cb\u003eNULL\u003c/b\u003e; &#39;k * hwnd : Window handle if ((lpfnEDM = (LPFNDEVMODE) GetProcAddress (hLib, * nOrientation = Desired paper orientation (0=Portrait,&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'WKaekAHjQ1EC',
    'etag': 'yOz1htZXwP0',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/WKaekAHjQ1EC',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-09-13',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 544,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.3.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=WKaekAHjQ1EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=WKaekAHjQ1EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=WKaekAHjQ1EC&pg=PA330&dq=null&hl=&as_pt=MAGAZINES&cd=3&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=WKaekAHjQ1EC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=WKaekAHjQ1EC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=WKaekAHjQ1EC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'llK facilitates complllng and llnklng the EMF2 program. four parameters, all of which are optional and can be set to \u003cb\u003eNULL\u003c/b\u003e (as in EMF1). The first parameter is a device-context handle. GDI uses this parameter to insert metrical&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'NXzbtAhctZMC',
    'etag': 'sjNFGrJLel4',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/NXzbtAhctZMC',
    'volumeInfo': {
      'title': 'Canadian Journal of Mathematics',
      'publishedDate': '1977-12',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 232,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.0.1.0.preview.1',
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=NXzbtAhctZMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=NXzbtAhctZMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=NXzbtAhctZMC&pg=PA1224&dq=null&hl=&as_pt=MAGAZINES&cd=4&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=NXzbtAhctZMC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Canadian_Journal_of_Mathematics.html?hl=&id=NXzbtAhctZMC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=NXzbtAhctZMC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'ponents of U do not form a \u003cb\u003enull\u003c/b\u003e family. Then there exists a sequence C\\)i€.v of components of U which is not a \u003cb\u003enull\u003c/b\u003e family. For each i there exists a continuum D i C C&lt; such that the family D () (£.v is not a \u003cb\u003enull\u003c/b\u003e family.'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'L39FUG-zDswC',
    'etag': 'Ujfq0MC30xA',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/L39FUG-zDswC',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-05-17',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 452,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.5.2.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=L39FUG-zDswC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=L39FUG-zDswC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=L39FUG-zDswC&pg=RA1-PA288&dq=null&hl=&as_pt=MAGAZINES&cd=5&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=L39FUG-zDswC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=L39FUG-zDswC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=L39FUG-zDswC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'coo1Movie&#39;, \u003cb\u003eNULL\u003c/b\u003e, 0, 0): coolnovie to start&quot;, coolMov1e&quot;, \u003cb\u003eNULL\u003c/b\u003e, 0, mciSendString (&#39;seek HINSTANCE hPrev. // Show the window wndclass.style = CS_DBLCLKS l CS_HREDRAW l CS_VREDRNN wndclass.lpfnWndProc = WndProc; // Return to Windows&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'IWcmOR5Xz3sC',
    'etag': 'Pc2Rb4FwDp4',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/IWcmOR5Xz3sC',
    'volumeInfo': {
      'title': 'Canadian Journal of Mathematics',
      'publishedDate': '1975-06',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 258,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': 'preview-1.0.0',
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=IWcmOR5Xz3sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=IWcmOR5Xz3sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=IWcmOR5Xz3sC&pg=PA598&dq=null&hl=&as_pt=MAGAZINES&cd=6&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=IWcmOR5Xz3sC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Canadian_Journal_of_Mathematics.html?hl=&id=IWcmOR5Xz3sC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=IWcmOR5Xz3sC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'There is an isomorphism between Sc and the set of all E paths from V to W on the original G whence V is a \u003cb\u003enull\u003c/b\u003e vertex of G. Thus G is \u003cb\u003enull\u003c/b\u003e and we see that no minimal graph can meet the conditions of case III. Case IV.'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'RjY3gFmnC8UC',
    'etag': '2b4Wo568twA',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/RjY3gFmnC8UC',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-04-12',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 442,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.3.2.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=RjY3gFmnC8UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=RjY3gFmnC8UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=RjY3gFmnC8UC&pg=PA317&dq=null&hl=&as_pt=MAGAZINES&cd=7&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=RjY3gFmnC8UC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=RjY3gFmnC8UC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=RjY3gFmnC8UC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'C DD Paths and Clipping BeginPath (hdc) ; (cl Charles Petzold, 1994 MoveToEx (hdc, pt[0].x, pt[0].y, \u003cb\u003eNULL\u003c/b\u003e) ; DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD-&#39;/ PolylineTo (hdc, pt ~ 1, 4) ; CloseFigure (hdc) ; flinclude &lt;windows.h&gt; EndPath&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'gasgHhfj-RAC',
    'etag': 'x5Bra1MhwSM',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/gasgHhfj-RAC',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1992-09-15',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 584,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.4.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=gasgHhfj-RAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=gasgHhfj-RAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=gasgHhfj-RAC&pg=PA443&dq=null&hl=&as_pt=MAGAZINES&cd=8&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=gasgHhfj-RAC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=gasgHhfj-RAC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=gasgHhfj-RAC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': '\u003cb\u003eNULL\u003c/b\u003e, lpDlgProc) ; FreeProcInstance (lpDlgProc) ; lpDlgProc = return 0 ; l ... for the new MIDIHDR I pmhNew = (LPMIDIHDF) GlobalAllocPtr (GHND | GMEM_SHARE, sizeof if (pmhNew == \u003cb\u003eNULL\u003c/b\u003e) return \u003cb\u003eNULL\u003c/b\u003e ; // Allocate memory for the buffer&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'r-5Zq-uW-N8C',
    'etag': '2agIYeFSEeY',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/r-5Zq-uW-N8C',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-11-08',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 498,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.3.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=r-5Zq-uW-N8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=r-5Zq-uW-N8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=r-5Zq-uW-N8C&pg=PA302&dq=null&hl=&as_pt=MAGAZINES&cd=9&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=r-5Zq-uW-N8C&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=r-5Zq-uW-N8C'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=r-5Zq-uW-N8C&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'hIcon = Loadlcon (\u003cb\u003eNULL\u003c/b\u003e, IDI-APPLICATION) ; case WM-CREATE: wndclass.hCursor = LoadCursor (\u003cb\u003eNULL\u003c/b\u003e, IDC-ARROW) ; CreateRoutine (hwnd) ; wndclass.hbrBackground = GetStockObject (WHITE-BRUSH) ; return 0 ; wndclass.'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'ZcHUWMdA1v4C',
    'etag': 'axnjcbscLCc',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/ZcHUWMdA1v4C',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-10-25',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 484,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.3.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=ZcHUWMdA1v4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=ZcHUWMdA1v4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=ZcHUWMdA1v4C&pg=PA303&dq=null&hl=&as_pt=MAGAZINES&cd=10&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=ZcHUWMdA1v4C&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=ZcHUWMdA1v4C'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=ZcHUWMdA1v4C&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'cbWndExtra = 0 ; \u003cb\u003eNULL\u003c/b\u003e)) ; wndc1ass.hInstance = hlnstance ; wndc1ass.hIcon = Loadlcon (\u003cb\u003eNULL\u003c/b\u003e, IDI_APPLICATION) ; Rectangle (hdc EMF, 160, 100, 201, 201) ; wndclass.hCursor = LoadCursor (\u003cb\u003eNULL\u003c/b\u003e, IDC_ARROW) ; wndc1ass.'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'E9TvMcu1mIwC',
    'etag': 'NTgcEaBJo0A',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/E9TvMcu1mIwC',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-01-11',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 452,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.3.2.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=E9TvMcu1mIwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=E9TvMcu1mIwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=E9TvMcu1mIwC&pg=PA274&dq=null&hl=&as_pt=MAGAZINES&cd=11&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=E9TvMcu1mIwC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=E9TvMcu1mIwC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=E9TvMcu1mIwC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'lpszOutput I \u003cb\u003eNULL\u003c/b\u003e ; linclude &lt;windows.h&gt; linclude &lt;string.h&gt; if (StartDoc (hdcPrn, adi) &gt; 0) linclude &#39;ntgdi.h&#39; { if (StartPage (hdcPrn) &gt; D) extern void PaintRoutine (HWND, HDC, int, int) ; ( long FAR PASCAL wndProc (HWND, UINT.'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'bgcAAAAAMBAJ',
    'etag': 'qbQxQTE2WCQ',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/bgcAAAAAMBAJ',
    'volumeInfo': {
      'title': 'Vegetarian Times',
      'publishedDate': '1992-12',
      'description': 'To do what no other magazine does: Deliver simple, delicious food, plus expert health and lifestyle information, that\'s exclusively vegetarian but wrapped in a fresh, stylish mainstream package that\'s inviting to all. Because while vegetarians are a great, vital, passionate niche, their healthy way of eating and the earth-friendly values it inspires appeals to an increasingly large group of Americans. VT\'s goal: To embrace both.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 108,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.0.1.0.preview.1',
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=bgcAAAAAMBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=bgcAAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=bgcAAAAAMBAJ&pg=PA108&dq=null&hl=&as_pt=MAGAZINES&cd=12&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=bgcAAAAAMBAJ&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Vegetarian_Times.html?hl=&id=bgcAAAAAMBAJ'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=bgcAAAAAMBAJ&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'Nutrition guru Gary \u003cb\u003eNull\u003c/b\u003e paces with the mainstream. ... On the contrary, \u003cb\u003eNull\u003c/b\u003e and the health-food scions are an oil- and- water mix that&#39;s peculiar in such a heretofore small and close-knit industry. And his relationship with leaders in&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'agTKi1nmvbYC',
    'etag': 'd2BdPUJ11u8',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/agTKi1nmvbYC',
    'volumeInfo': {
      'title': 'Computerworld',
      'publishedDate': '1992-11-23',
      'description': 'For more than 40 years, Computerworld has been the leading source of technology news and information for IT influencers worldwide. Computerworld\'s award-winning Web site (Computerworld.com), twice-monthly publication, focused conference series and custom research form the hub of the world\'s largest global IT media network.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 104,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.0.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=agTKi1nmvbYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=agTKi1nmvbYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=agTKi1nmvbYC&pg=PA5&dq=null&hl=&as_pt=MAGAZINES&cd=13&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=agTKi1nmvbYC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Computerworld.html?hl=&id=agTKi1nmvbYC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=agTKi1nmvbYC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': '(select count-empno) from inserted CREATE TABLE dept (deptno int not \u003cb\u003enull\u003c/b\u003e, dname char-14) not \u003cb\u003enull\u003c/b\u003e) CREATE UNIQUE INDEX dept,primary_key ON dept-deptno) CREATE TABLE emp &#39; (empno int not \u003cb\u003enull\u003c/b\u003e, mgr int \u003cb\u003enull\u003c/b\u003e, deptno int \u003cb\u003enull\u003c/b\u003e) CREATE&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'EaHN5MSNNv8C',
    'etag': 'dETu29VwWrk',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/EaHN5MSNNv8C',
    'volumeInfo': {
      'title': 'Computerworld',
      'publishedDate': '1992-12-14',
      'description': 'For more than 40 years, Computerworld has been the leading source of technology news and information for IT influencers worldwide. Computerworld\'s award-winning Web site (Computerworld.com), twice-monthly publication, focused conference series and custom research form the hub of the world\'s largest global IT media network.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 112,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.0.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=EaHN5MSNNv8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=EaHN5MSNNv8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=EaHN5MSNNv8C&pg=PA3&dq=null&hl=&as_pt=MAGAZINES&cd=14&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=EaHN5MSNNv8C&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Computerworld.html?hl=&id=EaHN5MSNNv8C'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=EaHN5MSNNv8C&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'Make sure deptno column of inserted emp rows is either \u003cb\u003enull\u003c/b\u003e or specifies an existing department. Also make sure that mgr column of inserted emp rows is either \u003cb\u003enull\u003c/b\u003e or specifies an existing manager. &#39;/ create trigger empjnsert on emp for&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'Xxmz8KfZs-IC',
    'etag': '7nCQbexZE3c',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/Xxmz8KfZs-IC',
    'volumeInfo': {
      'title': 'Computerworld',
      'publishedDate': '1993-01-25',
      'description': 'For more than 40 years, Computerworld has been the leading source of technology news and information for IT influencers worldwide. Computerworld\'s award-winning Web site (Computerworld.com), twice-monthly publication, focused conference series and custom research form the hub of the world\'s largest global IT media network.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 92,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.0.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=Xxmz8KfZs-IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=Xxmz8KfZs-IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=Xxmz8KfZs-IC&pg=PA7&dq=null&hl=&as_pt=MAGAZINES&cd=15&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=Xxmz8KfZs-IC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Computerworld.html?hl=&id=Xxmz8KfZs-IC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=Xxmz8KfZs-IC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'Zllll [NE llf Pllllll ifllllfi E /&#39; Make sure deleted manager does not have any /&#39;Prohibit updates to the deptno foreign key in the emp table l Cf (select count-empno) from inserted OH ,0 CREATE TABLE dept (deptno int not \u003cb\u003enull\u003c/b\u003e,&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'fy_G-xlQbE8C',
    'etag': 'KG8SPmzefu0',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/fy_G-xlQbE8C',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1994-10-11',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 582,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.3.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=fy_G-xlQbE8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=fy_G-xlQbE8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=fy_G-xlQbE8C&pg=PA344&dq=null&hl=&as_pt=MAGAZINES&cd=16&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=fy_G-xlQbE8C&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=fy_G-xlQbE8C'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=fy_G-xlQbE8C&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': '\u003cb\u003eNULL\u003c/b\u003e. \u003cb\u003eNULL\u003c/b\u003e. hlnstance. LRESUL/I&#39; CALLBACK WndProc (HWND hwnd, UINT message. WPARAM wPazam, LPARAM CS_HREDRAW i CS_VREDRAW; Loadlcon (\u003cb\u003eNULL\u003c/b\u003e. IDIAAPPLICATIONl ; LoadCursor (\u003cb\u003eNULL\u003c/b\u003e. GetSt0CkObjeCt (WHITE_BRUSH) ; &#39;Enhanced Metafile Demo 03&#39;,&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': '3EjcqIcCYCAC',
    'etag': 'gs+tOsU80ZM',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/3EjcqIcCYCAC',
    'volumeInfo': {
      'title': 'Computerworld',
      'publishedDate': '1993-02-08',
      'description': 'For more than 40 years, Computerworld has been the leading source of technology news and information for IT influencers worldwide. Computerworld\'s award-winning Web site (Computerworld.com), twice-monthly publication, focused conference series and custom research form the hub of the world\'s largest global IT media network.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 92,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.1.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=3EjcqIcCYCAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=3EjcqIcCYCAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=3EjcqIcCYCAC&pg=PA9&dq=null&hl=&as_pt=MAGAZINES&cd=17&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=3EjcqIcCYCAC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Computerworld.html?hl=&id=3EjcqIcCYCAC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=3EjcqIcCYCAC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'Also make sure that mgr column of inserted emp rows is either \u003cb\u003enull\u003c/b\u003e or specifies an existing manager. &#39;/ create trigger empjnsert on emp ... \u003cb\u003enull\u003c/b\u003e) + (select count(deptno) from inserted where inserteddeptno in (select deptno from dept)&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': '4pZs-BtA5bwC',
    'etag': 'VhJW6GwwplA',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/4pZs-BtA5bwC',
    'volumeInfo': {
      'title': 'MotorBoating',
      'publishedDate': '1975-01',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 298,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.1.2.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=4pZs-BtA5bwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=4pZs-BtA5bwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=4pZs-BtA5bwC&pg=PA200&dq=null&hl=&as_pt=MAGAZINES&cd=18&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=4pZs-BtA5bwC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/MotorBoating.html?hl=&id=4pZs-BtA5bwC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=4pZs-BtA5bwC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': '12 Blanchard Rd. Burlington, MA 01803 NUMBER METHOD FREQUENCY OF TUNING OF \u003cb\u003eNULL\u003c/b\u003e INPUT MODEL COVERAGE BANDS INDIC. VOLTAGE PRICE Seaspot 200-400 kHz 2 Audio Internal $169.95 (Head set) Batteries KONEL CORP. 271 Harbor Way So,&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'XcEKP0ml18EC',
    'etag': 'nHFGUjtgawc',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/XcEKP0ml18EC',
    'volumeInfo': {
      'title': 'PC Mag',
      'publishedDate': '1996-01-23',
      'description': 'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 338,
      'printType': 'MAGAZINE',
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.3.2.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=XcEKP0ml18EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=XcEKP0ml18EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=XcEKP0ml18EC&pg=PA234&dq=null&hl=&as_pt=MAGAZINES&cd=19&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=XcEKP0ml18EC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/PC_Mag.html?hl=&id=XcEKP0ml18EC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=XcEKP0ml18EC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': '\u003cb\u003eNULL\u003c/b\u003e. 0): if (nF1&#39;les =-—- 0) return FALSE: // // Create a list file containing the file names. // PG TEGII Utilities plementation of DragEnter calls IDataObject::QueryGetData through the pointer in pDataObj to verify that the object&nbsp;...'
    }
  },
  {
    'kind': 'books#volume',
    'id': 'a_Dn-A3AhioC',
    'etag': 'mbg6BhUVpY4',
    'selfLink': 'https://www.googleapis.com/books/v1/volumes/a_Dn-A3AhioC',
    'volumeInfo': {
      'title': 'Canadian Mathematical Bulletin',
      'publishedDate': '1963',
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 162,
      'printType': 'MAGAZINE',
      'averageRating': 1,
      'ratingsCount': 1,
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.1.1.0.preview.1',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=a_Dn-A3AhioC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=a_Dn-A3AhioC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.ro/books?id=a_Dn-A3AhioC&pg=PA213&dq=null&hl=&as_pt=MAGAZINES&cd=20&source=gbs_api',
      'infoLink': 'http://books.google.ro/books?id=a_Dn-A3AhioC&dq=null&hl=&as_pt=MAGAZINES&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Canadian_Mathematical_Bulletin.html?hl=&id=a_Dn-A3AhioC'
    },
    'saleInfo': {
      'country': 'RO',
      'saleability': 'NOT_FOR_SALE',
      'isEbook': false
    },
    'accessInfo': {
      'country': 'RO',
      'viewability': 'ALL_PAGES',
      'embeddable': true,
      'publicDomain': false,
      'textToSpeechPermission': 'ALLOWED',
      'epub': {
        'isAvailable': false
      },
      'pdf': {
        'isAvailable': false
      },
      'webReaderLink': 'http://play.google.com/books/reader?id=a_Dn-A3AhioC&hl=&as_pt=MAGAZINES&printsec=frontcover&source=gbs_api',
      'accessViewStatus': 'SAMPLE',
      'quoteSharingAllowed': false
    },
    'searchInfo': {
      'textSnippet': 'The relation f = g if f - g is \u003cb\u003enull\u003c/b\u003e is an equivalence relation. It is usual to extend the equivalence classes to include functions that are not defined in some \u003cb\u003enull\u003c/b\u003e set. A set A (function f) will be called locally \u003cb\u003enull\u003c/b\u003e if for each e e S&nbsp;...'
    }
  }
];
