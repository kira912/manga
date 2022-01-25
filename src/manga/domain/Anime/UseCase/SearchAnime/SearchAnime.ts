import { MangaApiInterface } from 'manga/domain';
import { SearchAnimePresenterInterface } from './SearchAnimePresenterInterface';
import { SearchAnimeRequest } from './SearchAnimeRequest';
import { SearchAnimeResponse } from './SearchAnimeResponse';

export class SearchAnime {
  constructor(private mangaApi: MangaApiInterface) {}

  async execute(request: SearchAnimeRequest, presenter: SearchAnimePresenterInterface) {
    const response = new SearchAnimeResponse();
    response.resultAnimes = await this.mangaApi.searchManga(request.searched);
    presenter.presentSearchAnime(response);
  }
}
