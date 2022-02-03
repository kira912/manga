import { MangaApiInterface } from 'manga/domain';
import { SearchMangaPresenterInterface } from './SearchMangaPresenterInterface';
import { SearchMangaRequest } from './SearchMangaRequest';
import { SearchMangaResponse } from './SearchMangaResponse';

export class SearchManga {
  constructor(private mangaApi: MangaApiInterface) {}

  async execute(request: SearchMangaRequest, presenter: SearchMangaPresenterInterface) {
    const response = new SearchMangaResponse();
    response.resultMangas = await this.mangaApi.searchManga(request.searched);
    presenter.presentSearchManga(response);
  }
}
