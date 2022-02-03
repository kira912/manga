import { ChapterUI } from './ChapterUI';
import { ChapterController } from './ChapterController';
import { GetScanChapters, ScanApiInterface } from '../../../../manga/domain';
import { ChapterUIPresenter } from './ChapterUIPresenter';

export class ChapterFactory {
  private instances: any = {};

  constructor(private mangaApi: ScanApiInterface) {}

  get viewModel() {
    return this.presenter.viewModel;
  }

  get ui(): ChapterUI {
    return this.presenter;
  }

  get controller() {
    return this.reuseOrInstantiate(
      'ChapterController',
      () => new ChapterController(
        new GetScanChapters(this.mangaApi),
        this.presenter,
      ),
    );
  }

  get presenter(): ChapterUIPresenter {
    return this.reuseOrInstantiate(
      'ChapterPresenter',
      () => new ChapterUIPresenter(),
    );
  }

  private reuseOrInstantiate<T>(id: string, callback: () => T): T {
    if (this.instances[id] === undefined) {
      this.instances[id] = callback();
    }
    return this.instances[id];
  }
}
