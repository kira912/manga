import {
  GetAllAnime,
  GetAnimeEpisodes,
  GetAnimeEpisodesPresenterInterface,
  GetAllAnimePresenterInterface,
  GetAnimeEpisodeRequest,
  GetAllAnimeRequest
} from '../../../manga/domain';

export class AnimeController {
  constructor(
    private getAllAnime: GetAllAnime,
    private getAnimeEpisodes: GetAnimeEpisodes,
    private getAllAnimePresenter: GetAllAnimePresenterInterface,
    private getAnimeEpisodePresenter: GetAnimeEpisodesPresenterInterface) {
  }

  async getAllAnimes(page: number = 1) {
    await this.getAllAnime.execute(new GetAllAnimeRequest(page), this.getAllAnimePresenter);
  }

  async getEpisodes(animeId: number) {
    await this.getAnimeEpisodes.execute(new GetAnimeEpisodeRequest(animeId), this.getAnimeEpisodePresenter);
  }
}
