import { Chapter } from "manga/domain/scan/entity/Chapter";
import { Page } from "../entity/Page";

export interface ScanApiInterface {
  getChapters(animeId: string): Promise<Chapter[]>;
  getChapterPages(chapterId: string): Promise<Page[]>;
}