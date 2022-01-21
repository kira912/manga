import { ChapterPageUI } from './ChapterPageUI';
import { GetScanChapterPage, ScanApiInterface } from '../../../../manga/domain';
import { ChapterPageController } from './ChapterPageController';
import { ChapterPageUIPresenter } from './ChapterPageUIPresenter';

export class ChapterPageFactory {
  private instances: any = {};

  constructor(private scanApi: ScanApiInterface) {}

  get viewModel() {
    return this.presenter.viewModel;
  }

  get ui(): ChapterPageUI {
    return this.presenter;
  }

  get controller() {
    return this.reuseOrInstantiate(
      'ChapterPageController',
      () => new ChapterPageController(
        new GetScanChapterPage(this.scanApi),
        this.presenter,
      ),
    );
  }

  get presenter() {
    return this.reuseOrInstantiate(
      'MangaScanPresenter',
      () => new ChapterPageUIPresenter(),
    );
  }

  private reuseOrInstantiate<T>(id: string, callback: () => T): T {
    if (this.instances[id] === undefined) {
      this.instances[id] = callback();
    }
    return this.instances[id];
  }
}
