import { SearchAnimeResponse } from "./SearchAnimeResponse";

export interface SearchAnimePresenterInterface {
  presentSearchAnime(response: SearchAnimeResponse): void;
}