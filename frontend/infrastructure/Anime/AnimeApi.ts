import { getAllAnime, getAnimeEpisodes } from "../../../infrastructure/di";
import { GetAllAnimePresenterInterface } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimePresenterInterface";
import { GetAllAnimeResponse } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimeResponse";
import { Anime } from "../../../manga/domain/Anime/Entity/Anime";
import { GetAnimeEpisodesPresenterInterface } from "manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesPresenterInterface";
import { GetAnimeEpisodesResponse } from "../../../manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesResponse";
import { Episode } from "../../../manga/domain/Anime/Entity/Episode";
import { GetAnimeEpisodeRequest } from "../../../manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodeRequest";

export class AnimeApi implements GetAllAnimePresenterInterface, GetAnimeEpisodesPresenterInterface {
  getAllAnimeResponse?: GetAllAnimeResponse;
  getAnimeEpisodeResponse?: GetAnimeEpisodesResponse;

  presentAllAnime(response: GetAllAnimeResponse): void {
    this.getAllAnimeResponse = response;
  }

  presentAnimeEpisodes(response: GetAnimeEpisodesResponse): void {
      this.getAnimeEpisodeResponse = response;
  }

  async getAllAnime(): Promise<Anime[]> {
    await getAllAnime.execute(this);
    return this.getAllAnimeResponse!.animes;
  }

  async getAnimeEpisodes(animeId: string): Promise<Episode[]> {
    await getAnimeEpisodes.execute(new GetAnimeEpisodeRequest(animeId), this);
    return this.getAnimeEpisodeResponse!.episodes;
  }
}