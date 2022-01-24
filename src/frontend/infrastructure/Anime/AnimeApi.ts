import { getAllAnime, getAnimeEpisodes, searchAnime } from "../../../infrastructure/";
import {
  GetAllAnimePresenterInterface,
  GetAllAnimeResponse,
  GetAnimeEpisodesPresenterInterface,
  GetAnimeEpisodesResponse,
  GetAnimeEpisodeRequest,
  SearchAnimeResponse,
  SearchAnimePresenterInterface,
  SearchAnimeRequest
} from "../../../manga/domain/";

export class AnimeApi implements GetAllAnimePresenterInterface, GetAnimeEpisodesPresenterInterface, SearchAnimePresenterInterface {
  private getAllAnimeResponse?: GetAllAnimeResponse;
  private getAnimeEpisodeResponse?: GetAnimeEpisodesResponse;
  private searchAnimeResponse?: SearchAnimeResponse;

  presentGetAllAnime(response: GetAllAnimeResponse): void {
    this.getAllAnimeResponse = response;
  }

  presentAnimeEpisodes(response: GetAnimeEpisodesResponse): void {
    this.getAnimeEpisodeResponse = response;
  }

  presentSearchAnime(response: SearchAnimeResponse): void {
      this.searchAnimeResponse = response;
  }

  async getAllAnime() {
    await getAllAnime.execute(this);
    return this.getAllAnimeResponse!.animes;
  }

  async getAnimeEpisodes(animeId: number) {
    await getAnimeEpisodes.execute(new GetAnimeEpisodeRequest(animeId), this);
    return this.getAnimeEpisodeResponse!.episodes;
  }

  async getSearchAnime(searched: string) {
    await searchAnime.execute(new SearchAnimeRequest(searched), this);
    return this.searchAnimeResponse!.resultAnimes;
  }
}