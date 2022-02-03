import { GetAllAnimeResponse } from "./GetAllAnimeResponse";

export interface GetAllAnimePresenterInterface {
  presentGetAllAnime(response: GetAllAnimeResponse): void;
}