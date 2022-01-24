import {
  GetAllAnime,
  GetAnimeEpisodes,
  GetAnimeEpisodesPresenterInterface,
  GetAllAnimePresenterInterface,
  GetAnimeEpisodeRequest,
  SearchAnime,
  SearchAnimePresenterInterface,
  SearchAnimeRequest,
} from '../../../manga/domain';

export class AnimeController {
  constructor(
    private getAllAnime: GetAllAnime,
    private getAnimeEpisodes: GetAnimeEpisodes,
    private searchAnime: SearchAnime,
    private getAllAnimePresenter: GetAllAnimePresenterInterface,
    private getAnimeEpisodePresenter: GetAnimeEpisodesPresenterInterface,
    private searchAnimePresenter: SearchAnimePresenterInterface) {
  }

  async getAllAnimes() {
    await this.getAllAnime.execute(this.getAllAnimePresenter);
  }

  async getEpisodes(animeId: number) {
    await this.getAnimeEpisodes.execute(new GetAnimeEpisodeRequest(animeId), this.getAnimeEpisodePresenter);
  }

  async getSearchAnime(searched: string) {
    await this.searchAnime.execute(new SearchAnimeRequest(searched), this.searchAnimePresenter);
  }
}
