import { MangaApiInterface } from '../MangaApiInterface';
import { GetMangaByIdPresenterInterface } from './GetMangaByIdPresenterInterface';
import { GetMangaByIdRequest } from './GetMangaByIdRequest';
import { GetMangaByIdResponse } from './GetMangaByIdResponse';

export class GetMangaById {
  constructor(private mangaApi: MangaApiInterface) {}

  async execute(request: GetMangaByIdRequest, presenter: GetMangaByIdPresenterInterface) {
    const response = new GetMangaByIdResponse();
    response.manga = await this.mangaApi.getMangaById(request.id);
    presenter.presentGetMangaById(response);
  }
}