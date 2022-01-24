import {
  Page,
  GetScanChapterPageResponse,
  GetScanChapterPagePresenterInterface
} from "../../../../manga/domain";
import { ChapterPagesViewModel, ViewModel } from "./ViewModel";
import { PageUI } from "./PageUI";

export class PageUIPresenter 
  implements GetScanChapterPagePresenterInterface,
  PageUI {
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
      return new ChapterPagesViewModel(page.id, page.url);
    })
  }
}