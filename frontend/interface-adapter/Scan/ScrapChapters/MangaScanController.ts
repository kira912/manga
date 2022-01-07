import { GetScanChapterPage } from "manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPage";
import { GetScanChapterPagePresenterInterface } from "manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPagePresenterInterface";
import { GetScanChapterPageRequest } from "../../../../manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPageRequest";
import { GetScanChapters } from "../../../../manga/domain/Scan/UseCase/GetScanChapters/GetScanChapters";
import { GetScanChaptersPresenterInterface } from "../../../../manga/domain/Scan/UseCase/GetScanChapters/GetScanChaptersPresenterInterface";
import { GetScanChaptersRequest } from "../../../../manga/domain/Scan/UseCase/GetScanChapters/GetScanChaptersRequest";

export class MangaScanController {
  constructor(
    private getScanChapters: GetScanChapters,
    private getChapterPages: GetScanChapterPage,
    private getScanChaptersPresenter: GetScanChaptersPresenterInterface,
    private getChapterPagesPresenter: GetScanChapterPagePresenterInterface) {
  }

  getChaptersList(animeName: string) {
    this.getScanChapters.execute(new GetScanChaptersRequest(animeName), this.getScanChaptersPresenter);
  }

  getChapterPage(bookUrl: string) {
    this.getChapterPages.execute(new GetScanChapterPageRequest(bookUrl), this.getChapterPagesPresenter);
  }
}