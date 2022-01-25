import { getAllManga } from "../../../infrastructure/";
import {
  GetAllMangaPresenterInterface,
  GetAllMangaResponse,
} from "../../../manga/domain/";

export class MangaApi implements GetAllMangaPresenterInterface {
  private getAllMangaResponse?: GetAllMangaResponse;

  presentAllManga(response: GetAllMangaResponse): void {
    this.getAllMangaResponse = response;
  }

  async getAllManga() {
    await getAllManga.execute(this);
    return this.getAllMangaResponse!.mangas;
  }
}