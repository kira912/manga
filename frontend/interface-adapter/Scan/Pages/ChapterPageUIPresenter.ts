import {
  Page,
  GetScanChapterPageResponse,
  GetScanChapterPagePresenterInterface
} from "../../../../manga/domain";
import { ScanChapterPagesViewModel, ViewModel } from "./ViewModel";
import { ChapterPageUI } from "./ChapterPageUI";

export class ChapterPageUIPresenter 
  implements GetScanChapterPagePresenterInterface,
  ChapterPageUI {
  private pages: Page[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentChapterPages(response: GetScanChapterPageResponse): void {
    this.pages = response.pages;
    this.updateChapterPagesViewModel();

  }

  private updateChapterPagesViewModel() {
    this.viewModel.pages = this.pages.map(page => {
      return new ScanChapterPagesViewModel(page.id, page.url);
    })
  }
}