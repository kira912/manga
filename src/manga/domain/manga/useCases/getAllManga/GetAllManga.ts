import { MangaApiInterface } from '../MangaApiInterface';
import { GetAllMangaPresenterInterface } from './GetAllMangaPresenterInterface';
import { GetAllMangaResponse } from './GetAllMangaResponse';

export class GetAllManga {
  constructor(private mangaApi: MangaApiInterface) {}

  async execute(presenter: GetAllMangaPresenterInterface) {
    const response = new GetAllMangaResponse();
    response.mangas = await this.mangaApi.getAllMangaForScan();
    presenter.presentAllManga(response);
  }
}