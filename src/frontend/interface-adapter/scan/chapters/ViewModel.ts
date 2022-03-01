export class ChapterViewModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly chapter: string,
    public readonly viewerId: string,
    public readonly viewerUrl: string,
  ) { }
}

export class ViewModel {
  chapters: ChapterViewModel[] = [];

  noChapters = 'Aucun scan trouvé !'
}