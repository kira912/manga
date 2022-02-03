import { ScanApiInterface } from '../../..';
import { GetScanChapterPagePresenterInterface } from './GetScanChapterPagePresenterInterface';
import { GetScanChapterPageRequest } from './GetScanChapterPageRequest';
import { GetScanChapterPageResponse } from './GetScanChapterPageResponse';

export class GetScanChapterPage {
  constructor(private scanApi: ScanApiInterface) {}

  async execute(request: GetScanChapterPageRequest, presenter: GetScanChapterPagePresenterInterface) {
    const response = new GetScanChapterPageResponse();
    response.pages = await this.scanApi.getChapterPages(request.bookId);
    presenter.presentChapterPages(response);
  }
}