import {
  GetAllManga,
  GetAllMangaPresenterInterface,
  SearchManga,
  SearchMangaPresenterInterface,
  SearchMangaRequest,
  GetMangaById,
  GetMangaByIdPresenterInterface,
  GetMangaByIdRequest,
} from '../../../manga/domain';

export class MangaController {
  constructor(
    private getAllManga: GetAllManga,
    private searchManga: SearchManga,
    private mangaById: GetMangaById,
    private getAllMangaPresenter: GetAllMangaPresenterInterface,
    private searchMangaPresenter: SearchMangaPresenterInterface,
    private getMangaByIdPresenter: GetMangaByIdPresenterInterface) {
  }

  getAllMangas() {
    return this.getAllManga.execute(this.getAllMangaPresenter);
  }

  async getSearchManga(searched: string) {
    await this.searchManga.execute(new SearchMangaRequest(searched), this.searchMangaPresenter);
  }

  getMangaById(mangaId: string) {
    return this.mangaById.execute(new GetMangaByIdRequest(mangaId), this.getMangaByIdPresenter)
  }
}
