export class ChapterPagesViewModel {
  constructor(
    public readonly id: string,
    public readonly url: string) { }
}

export class ViewModel {
  pages: ChapterPagesViewModel[] = [];
}
