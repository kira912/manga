export class MangaViewModel {
  constructor(
    public readonly id: string,
    public readonly description: string,
    public readonly name: string,
    public readonly image: string,
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
  resultMangaSearch: MangaSearchResultViewModel[] = [];
  searchPlaceholder = 'Recherche';
  resultSearchDisplayed = false;
  noResult = 'Aucun résultats !';

  setResultSearch(mangas: MangaSearchResultViewModel[]) {
    this.resultMangaSearch = mangas;
  }

  setDisplayResultSeatch(displayed: boolean) {
    this.resultSearchDisplayed = displayed;
  }
}
