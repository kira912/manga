import { AnimeApiInterface } from '../AnimeApiInterface';
import { GetAllAnimePresenterInterface } from './GetAllAnimePresenterInterface';
import { GetAllAnimeRequest } from './GetAllAnimeRequest';
import { GetAllAnimeResponse } from './GetAllAnimeResponse';

export class GetAllAnime {
  constructor(private mangaApi: AnimeApiInterface) {}

  async execute(request: GetAllAnimeRequest, presenter: GetAllAnimePresenterInterface) {
    const response = new GetAllAnimeResponse();
    response.animes = await this.mangaApi.getAllAnime(request.page);

    presenter.presentGetAllAnime(response);
  }
}
