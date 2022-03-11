import {
  Anime,
  Episode,
  GetAnimeEpisodesPresenterInterface,
  GetAllAnimePresenterInterface,
  GetAllAnimeResponse,
  GetAnimeEpisodesResponse,
} from '../../../manga/domain';
import { AnimeUI } from './AnimeUI';
import { ViewModel, AnimeViewModel, AnimeEpisodesViewModel } from './ViewModel';

export class AnimeUIPresenter
  implements
    AnimeUI,
    GetAllAnimePresenterInterface,
    GetAnimeEpisodesPresenterInterface
{
  private animes: Anime[] = [];
  private episodes: Episode[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentGetAllAnime(response: GetAllAnimeResponse): void {
    this.animes = response.animes;
    this.updateAnimeViewModel();
  }

  presentAnimeEpisodes(response: GetAnimeEpisodesResponse): void {
    this.episodes = response.episodes;
    this.updateAnimeEpisodeViewModel();
  }


  private updateAnimeViewModel() {
    this.viewModel.animes = this.animes.map((anime) => {
      return new AnimeViewModel(
        anime.id,
        anime.description,
        anime.name,
        anime.image,
      );
    });
  }

  private updateAnimeEpisodeViewModel() {
    this.viewModel.episodes = this.episodes.map((episode) => {
      return new AnimeEpisodesViewModel(
        episode.name.value,
        episode.site.value,
        episode.url.value,
        episode.image.value,
      );
    });
  }
}
