import {
  GetScanChaptersPresenterInterface,
  GetScanChaptersResponse,
  Chapter
} from "../../../../manga/domain";
import { ScanChaptersViewModel, ViewModel } from "../../../../frontend/interface-adapter/Scan/ScrapChapters/ViewModel";
import { MangaScanUI } from "./MangaScanUI";

export class MangaScanUIPresenter 
  implements GetScanChaptersPresenterInterface,
  MangaScanUI {
  private chapters: Chapter[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentScanChapters(response: GetScanChaptersResponse): void {
    this.chapters = response.chapters;
    this.updateChapterViewModel();
  }

  private updateChapterViewModel() {
    this.viewModel.chapters = this.chapters.map(chapter => {
      return new ScanChaptersViewModel(chapter.id, chapter.name, chapter.bookId);

    })
  }
}