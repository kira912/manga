import { AnimeApiInterface } from '../../../manga/domain/Anime/UseCase/AnimeApiInterface';
import { GetAllAnime } from '../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnime';
import { EventDispatcher } from '../../../manga/shared-kernel';
import { AnimeUI } from './AnimeUI';
import { AnimeUIPresenter } from './AnimeUIPresenter';
import { AnimeController } from './AnimeController';
import { GetAnimeEpisodes } from '../../../manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodes';

export class AnimeFactory {
  private instances: any = {};

  constructor(private eventDispatcher: EventDispatcher, private mangaApi: AnimeApiInterface) {}

  get viewModel() {
    return this.presenter.viewModel;
  }

  get ui(): AnimeUI {
    return this.presenter;
  }

  get controller() {
    return this.reuseOrInstantiate(
      'AnimeController',
      () => new AnimeController(
        new GetAllAnime(this.mangaApi),
        new GetAnimeEpisodes(this.mangaApi),
        this.presenter,
        this.presenter
      ),
    );
  }

  get presenter() {
    return this.reuseOrInstantiate(
      'AnimePresenter',
      () => new AnimeUIPresenter(),
    );
  }

  private reuseOrInstantiate<T>(id: string, callback: () => T): T {
    if (this.instances[id] === undefined) {
      this.instances[id] = callback();
    }
    return this.instances[id];
  }
}
