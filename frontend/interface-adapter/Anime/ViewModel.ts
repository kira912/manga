export class AnimeViewModel {
  constructor(
    public readonly id: string,
    public readonly type: string,
    public readonly description: string,
    public readonly synopsis: string,
    public readonly name: string,
    public readonly image: string
  ) { }
}

export class ViewModel {
  animes: AnimeViewModel[] = [];
}