import {
  GetAllManga,
  GetAllMangaPresenterInterface,
  SearchAnime,
  SearchAnimePresenterInterface,
  SearchAnimeRequest,
} from '../../../manga/domain';

export class MangaController {
  constructor(
    private getAllManga: GetAllManga,
    private searchAnime: SearchAnime,
    private getAllMangaPresenter: GetAllMangaPresenterInterface,
    private searchAnimePresenter: SearchAnimePresenterInterface) {
  }

  async getAllMangas() {
    await this.getAllManga.execute(this.getAllMangaPresenter);
  }

  async getSearchAnime(searched: string) {
    await this.searchAnime.execute(new SearchAnimeRequest(searched), this.searchAnimePresenter);
  }
}
