import { GetAllAnimeResponse } from "./GetAllAnimeResponse";

export interface GetAllAnimePresenterInterface {
  presentAllAnime(response: GetAllAnimeResponse): void;
}