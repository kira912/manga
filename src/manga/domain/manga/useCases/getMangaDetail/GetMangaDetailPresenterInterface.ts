import { GetMangaDetailResponse } from "./GetMangaDetailResponse";

export interface GetMangaDetailPresenterInterface {
  presentMangaDetail(response: GetMangaDetailResponse): void;
}