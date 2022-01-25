import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { Page } from "../Entity/Page";

export interface ScanApiInterface {
  getChapters(animeId: string): Promise<Chapter[]>;
  getChapterPages(chapterId: string): Promise<Page[]>;
}