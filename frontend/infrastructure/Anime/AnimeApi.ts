import { getAllAnime, getAnimeEpisodes } from "../../../infrastructure/";
import {
  GetAllAnimePresenterInterface,
  GetAllAnimeResponse,
  GetAnimeEpisodesPresenterInterface,
  GetAnimeEpisodesResponse,
  GetAnimeEpisodeRequest
} from "../../../manga/domain/";

export class AnimeApi implements GetAllAnimePresenterInterface, GetAnimeEpisodesPresenterInterface {
  private getAllAnimeResponse?: GetAllAnimeResponse;
  private getAnimeEpisodeResponse?: GetAnimeEpisodesResponse;

  presentGetAllAnime(response: GetAllAnimeResponse): void {
    this.getAllAnimeResponse = response;
  }

  presentAnimeEpisodes(response: GetAnimeEpisodesResponse): void {
    this.getAnimeEpisodeResponse = response;
  }

  async getAllAnime() {
    await getAllAnime.execute(this);
    return this.getAllAnimeResponse!.animes;
  }

  async getAnimeEpisodes(animeId: number) {
    await getAnimeEpisodes.execute(new GetAnimeEpisodeRequest(animeId), this);
    return this.getAnimeEpisodeResponse!.episodes;
  }
}