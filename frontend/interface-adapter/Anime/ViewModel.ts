export class AnimeViewModel {
  constructor(
    public readonly id: number,
    public readonly description: string,
    public readonly name: string,
    public readonly image: string
  ) { }
}

export class AnimeEpisodesViewModel {
  constructor(
    public readonly title: string,
    public readonly site: string,
    public readonly url: string,
    public readonly image: string
  ) { }
}

export class ViewModel {
  animes: AnimeViewModel[] = [];
  episodes: AnimeEpisodesViewModel[] = [];
}