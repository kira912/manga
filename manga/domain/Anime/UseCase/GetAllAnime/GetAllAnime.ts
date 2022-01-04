import { AnimeApiInterface } from '../AnimeApiInterface';
import { GetAllAnimePresenterInterface } from './GetAllAnimePresenterInterface';
import { GetAllAnimeResponse } from './GetAllAnimeResponse';

export class GetAllAnime {
  constructor(private mangaApi: AnimeApiInterface) {}

  async execute(presenter: GetAllAnimePresenterInterface) {
    const response = new GetAllAnimeResponse();
    response.animes = await this.mangaApi.getAllAnime();
    presenter.presentAllAnime(response);
  }
}