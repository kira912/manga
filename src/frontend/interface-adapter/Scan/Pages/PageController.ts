import { GetScanChapterPage, GetScanChapterPagePresenterInterface, GetScanChapterPageRequest } from "../../../../manga/domain";

export class PageController {
  constructor(
    private getScanChapterPages: GetScanChapterPage,
    private getChapterPagesPresenter: GetScanChapterPagePresenterInterface) {
  }

  async getChapterPages(bookId: string) {
    await this.getScanChapterPages.execute(new GetScanChapterPageRequest(bookId), this.getChapterPagesPresenter);
  }
}