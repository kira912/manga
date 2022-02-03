import { SearchMangaResponse } from "./SearchMangaResponse";

export interface SearchMangaPresenterInterface {
  presentSearchManga(response: SearchMangaResponse): void;
}