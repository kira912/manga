import { AnimeScrapperInterface } from "manga/domain/Anime/UseCase/AnimeScrapperInterface";
import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { ScanApi } from "./ScanApi";

export class ScanFakeApi implements AnimeScrapperInterface {
  constructor(private api: ScanApi) { }

  async scrapChapters(animeId: string): Promise<Chapter[]> {
    return this.api.scrapChapters(animeId);
  }
}