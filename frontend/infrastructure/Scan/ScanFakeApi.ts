import { AnimeScrapperInterface } from "manga/domain";
import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { Page } from "manga/domain/Scan/Entity/Page";
import { ScanApi } from "./ScanApi";

export class ScanFakeApi implements AnimeScrapperInterface {
  constructor(private api: ScanApi) { }

  scrapChapters(animeId: number): Promise<Chapter[]> {
    return this.api.scrapChapters(animeId);
  }

  scrapChapterPages(bookId: string): Promise<Page[]> {
    return this.api.scrapChapterPages(bookId);
  }
}