export class ScanChaptersViewModel {
  constructor(
    public readonly id: string,
      public readonly name: string,
      public readonly bookId: string
  ) { }
}

export class ScanChapterPagesViewModel {
  constructor(
    public readonly id: string,
    public readonly url: string) { }
}

export class ViewModel {
  chapters: ScanChaptersViewModel[] = [];
  pages: ScanChapterPagesViewModel[] = [];
}