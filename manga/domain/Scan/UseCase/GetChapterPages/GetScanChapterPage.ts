import { AnimeScrapperInterface } from '../../../../../manga/domain/Anime/UseCase/AnimeScrapperInterface';
import { GetScanChapterPagePresenterInterface } from './GetScanChapterPagePresenterInterface';
import { GetScanChapterPageRequest } from './GetScanChapterPageRequest';
import { GetScanChapterPageResponse } from './GetScanChapterPageResponse';

export class GetScanChapterPage {
  constructor(private mangaScrapper: AnimeScrapperInterface) {}

  async execute(request: GetScanChapterPageRequest, presenter: GetScanChapterPagePresenterInterface) {
    const response = new GetScanChapterPageResponse();
    response.pages = await this.mangaScrapper.scrapChapterPages(request.bookLink);
    presenter.presentChapterPages(response);
  }
}