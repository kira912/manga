export class MangaViewModel {
  constructor(
    public readonly id: string,
    public readonly description: string,
    public readonly name: string,
    public readonly image: string,
    public readonly originalLang: string,
    public readonly year: string,
    public readonly status: string,
  ) { }
}

export class MangaSearchResultViewModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly image: string,
  ) { }
}

export class ViewModel {
  mangas: MangaViewModel[] = [];
  manga?: MangaViewModel;
  resultMangaSearch: MangaSearchResultViewModel[] = [];
  searchPlaceholder = 'Recherche';
  resultSearchDisplayed = false;
  noResult = 'Aucun résultats !';
  statusCardTitle = 'Status';
  yearCardTitle = 'Année';
  originalLangCardTitle = 'Langue origine';
  allLanguagesAvailableCardTitle = 'Langues disponibles';
  allMangaTitleCardTitle = 'Titres';

  setResultSearch(mangas: MangaSearchResultViewModel[]) {
    this.resultMangaSearch = mangas;
  }

  setDisplayResultSeatch(displayed: boolean) {
    this.resultSearchDisplayed = displayed;
  }
}
