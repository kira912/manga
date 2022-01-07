import { GetAllAnimePresenterInterface } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimePresenterInterface";
import { GetAllAnime } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnime";
import { GetAnimeEpisodes } from "manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodes";
import { GetAnimeEpisodesPresenterInterface } from "manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesPresenterInterface";
import { GetAnimeEpisodeRequest } from "../../../manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodeRequest";

export class AnimeController {
  constructor(
    private getAllAnime: GetAllAnime,
    private getAnimeEpisodes: GetAnimeEpisodes,
    private getAllAnimePresenter: GetAllAnimePresenterInterface,
    private getAnimeEpisodePresenter: GetAnimeEpisodesPresenterInterface) {
  }

  async refreshSummary() {
    await this.getAllAnime.execute(this.getAllAnimePresenter)
  }

  getEpisodes(animeId: string) {
    this.getAnimeEpisodes.execute(new GetAnimeEpisodeRequest(animeId), this.getAnimeEpisodePresenter);
  }
}