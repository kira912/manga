import { GetMangaByIdResponse } from "./GetMangaByIdResponse";

export interface GetMangaByIdPresenterInterface {
  presentGetMangaById(response: GetMangaByIdResponse): void;
}