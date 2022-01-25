import { Manga } from "../../Entity/Manga";

export interface MangaApiInterface {
  getAllMangaForScan(): Promise<Manga[]>;
  getDetails(id: string): Promise<Manga>;
  searchManga(searched: string): Promise<Manga>;
}
