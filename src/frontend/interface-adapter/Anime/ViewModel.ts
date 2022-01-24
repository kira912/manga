export class AnimeViewModel {
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


export class AnimeEpisodesViewModel {
  constructor(
    public readonly title: string,
    public readonly site: string,
    public readonly url: string,
    public readonly image: string,
  ) { }
}

type EventCallback = (payload: any, eventName: string) => any;
export class ViewModel {
  animes: AnimeViewModel[] = [];
  episodes: AnimeEpisodesViewModel[] = [];
  resultAnimeSearch: AnimeSearchResultViewModel[] = [];
  private observers: (EventCallback)[] = [];

  searchPlaceholder = 'Recherche';
  resultSearchDisplayed = false;
  noResult = 'Aucun résultats !';

  setResultSearch(animes: AnimeSearchResultViewModel[]) {
    this.resultAnimeSearch = animes;
    this.observers.forEach(cb => cb({ animes }, 'SetResult'));
  }

  setDisplayResultSeatch(displayed: boolean) {
    this.resultSearchDisplayed = displayed;
    this.observers.forEach(cb => cb({ displayed }, 'SetResultDisplay'));
  }
}
