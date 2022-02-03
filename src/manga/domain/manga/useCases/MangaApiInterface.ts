import { Manga } from "../entity/Manga";
import { MangaId } from "../entity/MangaId";

export interface MangaApiInterface {
  getAllMangaForScan(): Promise<Manga[]>;
  getDetails(id: string): Promise<Manga>;
  searchManga(searched: string): Promise<Manga[]>;
  getMangaById(mangaId: MangaId | string): Promise<Manga|undefined>;
}
