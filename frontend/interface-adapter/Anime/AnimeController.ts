import {
  GetAllAnime,
  GetAnimeEpisodes,
  GetAnimeEpisodesPresenterInterface,
  GetAllAnimePresenterInterface,
  GetAnimeEpisodeRequest
} from "../../../manga/domain";

export class AnimeController {
  constructor(
    private getAllAnime: GetAllAnime,
    private getAnimeEpisodes: GetAnimeEpisodes,
    private getAllAnimePresenter: GetAllAnimePresenterInterface,
    private getAnimeEpisodePresenter: GetAnimeEpisodesPresenterInterface) {
  }

  async getAllAnimes() {
    await this.getAllAnime.execute(this.getAllAnimePresenter)
  }

  async getEpisodes(animeId: number) {
    await this.getAnimeEpisodes.execute(new GetAnimeEpisodeRequest(animeId), this.getAnimeEpisodePresenter);
  }
}