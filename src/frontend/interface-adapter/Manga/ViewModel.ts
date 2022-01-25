export class MangaViewModel {
  constructor(
    public readonly id: number,
    public readonly description: string,
    public readonly name: string,
    public readonly image: string,
  ) { }
}

export class AnimeSearchResultViewModel {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly image: string,
  ) { }
}

export class ViewModel {
  mangas: MangaViewModel[] = [];
  resultAnimeSearch: AnimeSearchResultViewModel[] = [];
  searchPlaceholder = 'Recherche';
  resultSearchDisplayed = false;
  noResult = 'Aucun résultats !';

  setResultSearch(animes: AnimeSearchResultViewModel[]) {
    this.resultAnimeSearch = animes;
  }

  setDisplayResultSeatch(displayed: boolean) {
    this.resultSearchDisplayed = displayed;
  }
}
