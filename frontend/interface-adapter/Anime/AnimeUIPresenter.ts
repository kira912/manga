import { Episode } from "manga/domain/Anime/Entity/Episode";
import { GetAnimeEpisodesPresenterInterface } from "manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesPresenterInterface";
import { GetAnimeEpisodesResponse } from "manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesResponse";
import { Anime } from "../../../manga/domain/Anime/Entity/Anime";
import { GetAllAnimePresenterInterface } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimePresenterInterface";
import { GetAllAnimeResponse } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimeResponse";
import { AnimeUI } from "./AnimeUI";
import { ViewModel, AnimeViewModel, AnimeEpisodesViewModel } from "./ViewModel";

export class AnimeUIPresenter implements GetAllAnimePresenterInterface, GetAnimeEpisodesPresenterInterface, AnimeUI {
  private animes: Anime[] = [];
  private episodes: Episode[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentAllAnime(response: GetAllAnimeResponse): void {
    this.animes = response.animes;
    this.updateAnimeViewModel();
  }

  presentAnimeEpisodes(response: GetAnimeEpisodesResponse): void {
    this.episodes = response.episodes;
    this.updateAnimeEpisodeViewModel()
  }

  private updateAnimeViewModel() {
    this.viewModel.animes = this.animes.map(anime => {
      return new AnimeViewModel(
        anime.id,
        anime.description,
        anime.name,
        '',
        anime.image,
      );
    })
  }

  private updateAnimeEpisodeViewModel() {
    this.viewModel.episodes = this.episodes.map(episode => {
      return new AnimeEpisodesViewModel(
        episode.name,
        episode.site,
        episode.url,
        episode.image,
      );
    })
  }
}