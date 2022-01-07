import { Page } from "manga/domain/Scan/Entity/Page";
import { GetScanChapterPageResponse } from "manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPageResponse";
import { ScanChaptersViewModel, ScanChapterPagesViewModel, ViewModel } from "../../../../frontend/interface-adapter/Scan/ScrapChapters/ViewModel";
import { Chapter } from "../../../../manga/domain/Scan/Entity/Chapter";
import { GetScanChaptersPresenterInterface } from "../../../../manga/domain/Scan/UseCase/GetScanChapters/GetScanChaptersPresenterInterface";
import { GetScanChaptersResponse } from "../../../../manga/domain/Scan/UseCase/GetScanChapters/GetScanChaptersResponse";
import { MangaScanUI } from "./MangaScanUI";

export class MangaScanUIPresenter 
  implements GetScanChaptersPresenterInterface,
  GetScanChaptersPresenterInterface,
  MangaScanUI {
  private chapters: Chapter[] = [];
  private pages: Page[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentScanChapters(response: GetScanChaptersResponse): void {
    this.chapters = response.chapters;
    this.updateChapterViewModel();
  }

  presentChapterPages(response: GetScanChapterPageResponse): void {
    this.pages = response.pages;
    this.updateChapterPagesViewModel();

  }

  private updateChapterViewModel() {
    this.viewModel.chapters = this.chapters.map(chapter => {
      return new ScanChaptersViewModel(chapter.id, chapter.name, chapter.bookUrl, chapter.pages);

    })
  }

  private updateChapterPagesViewModel() {
    this.viewModel.pages = this.pages.map(page => {
      return new ScanChapterPagesViewModel(page.id, page.url);
    })
  }
}