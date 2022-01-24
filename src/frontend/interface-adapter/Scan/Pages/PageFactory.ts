import { PageUI } from './PageUI';
import { GetScanChapterPage, ScanApiInterface } from '../../../../manga/domain';
import { PageController } from './PageController';
import { PageUIPresenter } from './PageUIPresenter';

export class PageFactory {
  private instances: any = {};

  constructor(private scanApi: ScanApiInterface) {}

  get viewModel() {
    return this.presenter.viewModel;
  }

  get ui(): PageUI {
    return this.presenter;
  }

  get controller() {
    return this.reuseOrInstantiate(
      'PageController',
      () => new PageController(
        new GetScanChapterPage(this.scanApi),
        this.presenter,
      ),
    );
  }

  get presenter() {
    return this.reuseOrInstantiate(
      'PagePresenter',
      () => new PageUIPresenter(),
    );
  }

  private reuseOrInstantiate<T>(id: string, callback: () => T): T {
    if (this.instances[id] === undefined) {
      this.instances[id] = callback();
    }
    return this.instances[id];
  }
}
