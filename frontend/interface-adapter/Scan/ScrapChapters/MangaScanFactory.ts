import { EventDispatcher } from '../../../manga/shared-kernel';
import { AnimeUI } from './AnimeUI';
import { AnimeScrapperInterface } from '../../../../manga/domain/Anime/UseCase/AnimeScrapperInterface';
import { MangaScanController } from './MangaScanController';
import { GetScanChapters } from '../../../../manga/domain/Scan/UseCase/GetScanChapters/GetScanChapters';
import { MangaScanUIPresenter } from './MangaScanUIPresenter';
import { GetScanChapterPage } from '../../../../manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPage';

export class MangaScanFactory {
  private instances: any = {};

  constructor(private eventDispatcher: EventDispatcher, private mangaScrapper: AnimeScrapperInterface) {}

  get viewModel() {
    return this.presenter.viewModel;
  }

  get ui(): AnimeUI {
    return this.presenter;
  }

  get controller() {
    return this.reuseOrInstantiate(
      'MangaScanController',
      () => new MangaScanController(
        new GetScanChapters(this.mangaScrapper),
        new GetScanChapterPage(this.mangaScrapper),
        this.presenter,
        this.presenter,
      ),
    );
  }

  get presenter() {
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
