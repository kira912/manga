import {
  Anime,
  Episode,
  GetAnimeEpisodesPresenterInterface,
  GetAllAnimePresenterInterface,
  GetAllAnimeResponse,
  GetAnimeEpisodesResponse,
  SearchAnimePresenterInterface,
  SearchAnimeResponse,
} from '../../../manga/domain';
import { AnimeUI } from './AnimeUI';
import { ViewModel, AnimeViewModel, AnimeEpisodesViewModel, AnimeSearchResultViewModel } from './ViewModel';

export class AnimeUIPresenter
  implements
    AnimeUI,
    GetAllAnimePresenterInterface,
    GetAnimeEpisodesPresenterInterface,
    SearchAnimePresenterInterface
{
  private animes: Anime[] = [];
  private episodes: Episode[] = [];
  private resultAnimeSearch: AnimeSearchResultViewModel[] = [];
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

  presentSearchAnime(response: SearchAnimeResponse): void {
    this.resultAnimeSearch = response.resultAnimes;
    this.updateSearchedAnimeViewModel();
  }

  showResultSearch(): void {
    this.viewModel.setDisplayResultSeatch(true);
  }

  hideResultSearch(): void {
    this.viewModel.setDisplayResultSeatch(false);
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

  private updateSearchedAnimeViewModel() {
    this.viewModel.resultAnimeSearch = this.resultAnimeSearch.map((anime) => {
      return new AnimeSearchResultViewModel(
        anime.id,
        anime.name,
        anime.image,
      );
    });
  }

  private updateAnimeEpisodeViewModel() {
    this.viewModel.episodes = this.episodes.map((episode) => {
      return new AnimeEpisodesViewModel(
        episode.name,
        episode.site,
        episode.url,
        episode.image,
      );
    });
  }
}
