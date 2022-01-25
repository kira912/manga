import { MangaApiInterface, Manga } from "../../../manga/domain";
import { MangaApi } from "./MangaApi";

export class MangaFakeApi implements MangaApiInterface {
  constructor(private api: MangaApi) { }

  getAllMangaForScan(): Promise<Manga[]> {
    return this.api.getAllManga();
  }
  
  // getDetails(id: string): Promise<Manga> {
      
  // }

  // searchManga(searched: string): Promise<Manga> {
      
  // }
}