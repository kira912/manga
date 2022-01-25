import { GetAllMangaResponse } from "./GetAllMangaResponse";

export interface GetAllMangaPresenterInterface {
  presentAllManga(response: GetAllMangaResponse): void;
}