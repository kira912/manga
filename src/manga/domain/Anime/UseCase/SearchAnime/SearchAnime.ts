import { AnimeApiInterface } from '../AnimeApiInterface';
import { SearchAnimePresenterInterface } from './SearchAnimePresenterInterface';
import { SearchAnimeRequest } from './SearchAnimeRequest';
import { SearchAnimeResponse } from './SearchAnimeResponse';

export class SearchAnime {
  constructor(private mangaApi: AnimeApiInterface) {}

  async execute(request: SearchAnimeRequest, presenter: SearchAnimePresenterInterface) {
    const response = new SearchAnimeResponse();
    response.resultAnimes = await this.mangaApi.searchMangaBy(request.searched);
    presenter.presentSearchAnime(response);
  }
}
