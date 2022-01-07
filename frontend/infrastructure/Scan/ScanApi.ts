import { getScanChapter, getScanChapterPages } from "../../../infrastructure/di";
import { GetScanChaptersPresenterInterface } from "manga/domain/Scan/UseCase/GetScanChapters/GetScanChaptersPresenterInterface";
import { GetScanChaptersResponse } from "manga/domain/Scan/UseCase/GetScanChapters/GetScanChaptersResponse";
import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { GetScanChaptersRequest } from "manga/domain/Scan/UseCase/GetScanChapters/GetScanChaptersRequest";
import { GetScanChapterPagePresenterInterface } from "manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPagePresenterInterface";
import { GetScanChapterPageResponse } from "manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPageResponse";
import { Page } from "manga/domain/Scan/Entity/Page";
import { GetScanChapterPageRequest } from "manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPageRequest";

export class ScanApi implements GetScanChaptersPresenterInterface, GetScanChapterPagePresenterInterface {
  getScanChaptersResponse?: GetScanChaptersResponse;
  getChapterPagesResponse?: GetScanChapterPageResponse;

  presentScanChapters(response: GetScanChaptersResponse): void {
    this.getScanChaptersResponse = response;
  }

  presentChapterPages(response: GetScanChapterPageResponse): void {
    this.getChapterPagesResponse = response;
  }

  async scrapChapters(id: string): Promise<Chapter[]> {
    await getScanChapter.execute(new GetScanChaptersRequest(id), this);
    return this.getScanChaptersResponse!.chapters;
  }

  async scrapChapterPages(bookUrl: string): Promise<Page[]> {
    await getScanChapterPages.execute(new GetScanChapterPageRequest(bookUrl), this);
    return this.getChapterPagesResponse!.pages;
  }
}