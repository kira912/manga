import { Episode } from "manga/domain/Anime/Entity/Episode";
import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { Page } from "manga/domain/Scan/Entity/Page";

export class ScanChaptersViewModel {
  constructor(
    public readonly id: string,
      public readonly name: string,
      public readonly bookUrl: string,
      public readonly pages: Page[]
  ) { }
}

export class ScanChapterPagesViewModel {
  constructor(
    public readonly id: number,
    public readonly url: string) { }
}

export class ViewModel {
  chapters: ScanChaptersViewModel[] = [];
  pages: ScanChapterPagesViewModel[] = [];
}