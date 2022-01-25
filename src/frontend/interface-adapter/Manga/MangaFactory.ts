import { 
  MangaApiInterface,
  GetAllManga,
  SearchAnime,
} from '../../../manga/domain';
import { MangaUI } from './MangaUI';
import { MangaUIPresenter } from './MangaUIPresenter';
import { MangaController } from './MangaController';
import { ViewModel } from './ViewModel';

export class MangaFactory {
  private instances: any = {};

  constructor(private mangaApi: MangaApiInterface) {}

  get viewModel(): ViewModel {
    return this.presenter.viewModel;
  }

  get ui(): MangaUI {
    return this.presenter;
  }

  get controller() {
    return this.reuseOrInstantiate(
      'AnimeCMangaControllerontroller',
      () => new MangaController(
        new GetAllManga(this.mangaApi),
        new SearchAnime(this.mangaApi),
        this.presenter,
        this.presenter,
      ),
    );
  }

  get presenter(): MangaUIPresenter {
    return this.reuseOrInstantiate(
      'MangaPresenter',
      () => new MangaUIPresenter(),
    );
  }

  private reuseOrInstantiate<T>(id: string, callback: () => T): T {
    if (this.instances[id] === undefined) {
      this.instances[id] = callback();
    }
    return this.instances[id];
  }
}
