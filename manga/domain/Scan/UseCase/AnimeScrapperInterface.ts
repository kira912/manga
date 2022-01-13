import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { Page } from "manga/domain/Scan/Entity/Page";

export interface AnimeScrapperInterface {
    scrapChapters(animeId: number): Promise<Chapter[]>;
    scrapChapterPages(bookId: string): Promise<Page[]>;
}