import { Page, ScanApiInterface } from "manga/domain";
import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { ScanApi } from "./ScanApi";

export class ScanFakeApi implements ScanApiInterface {
  constructor(private api: ScanApi) { }

  getChapters(animeId: string): Promise<Chapter[]> {
    return this.api.getChapters(animeId);
  }

  getChapterPages(chapterId: string): Promise<Page[]> {
    return this.api.getChapterPages(chapterId)
  }
}