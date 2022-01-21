import { MangaScanUI } from './MangaScanUI';
import { MangaScanController } from './MangaScanController';
import { GetScanChapters, ScanApiInterface } from '../../../../manga/domain';
import { MangaScanUIPresenter } from './MangaScanUIPresenter';

export class MangaScanFactory {
  private instances: any = {};

  constructor(private mangaApi: ScanApiInterface) {}

  get viewModel() {
    return this.presenter.viewModel;
  }

  get ui(): MangaScanUI {
    return this.presenter;
  }

  get controller() {
    return this.reuseOrInstantiate(
      'MangaScanController',
      () => new MangaScanController(
        new GetScanChapters(this.mangaApi),
        this.presenter,
      ),
    );
  }

  get presenter(): MangaScanUIPresenter {
    return this.reuseOrInstantiate(
      'MangaScanPresenter',
      () => new MangaScanUIPresenter(),
    );
  }

  private reuseOrInstantiate<T>(id: string, callback: () => T): T {
    if (this.instances[id] === undefined) {
      this.instances[id] = callback();
    }
    return this.instances[id];
  }
}
