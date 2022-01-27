import {
  GetScanChaptersPresenterInterface,
  GetScanChaptersResponse,
  Chapter
} from "../../../../manga/domain";
import { ChapterViewModel, ViewModel } from "./ViewModel";
import { ChapterUI } from "./ChapterUI";

export class ChapterUIPresenter
  implements GetScanChaptersPresenterInterface,
  ChapterUI {
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
      return new ChapterViewModel(chapter.id.toString(), chapter.name.value, chapter.number.value, chapter.externalViewer.value);

    })
  }
}