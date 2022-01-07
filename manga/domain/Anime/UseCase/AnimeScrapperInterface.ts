import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { Page } from "manga/domain/Scan/Entity/Page";

export interface AnimeScrapperInterface {
    scrapChapters(animeId: string): Promise<Chapter[]>;
    scrapChapterPages(animeId: string): Promise<Page[]>;
}