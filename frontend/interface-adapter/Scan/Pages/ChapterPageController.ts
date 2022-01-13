import { GetScanChapterPage, GetScanChapterPagePresenterInterface, GetScanChapterPageRequest } from "../../../../manga/domain";

export class ChapterPageController {
  constructor(
    private getScanChapterPages: GetScanChapterPage,
    private getChapterPagesPresenter: GetScanChapterPagePresenterInterface) {
  }

  async getChapterPages(bookId: number) {
    await this.getScanChapterPages.execute(new GetScanChapterPageRequest(bookId), this.getChapterPagesPresenter);
  }
}