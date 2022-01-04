import { Anime } from "../../../manga/domain/Anime/Entity/Anime";
import { GetAllAnimePresenterInterface } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimePresenterInterface";
import { GetAllAnimeResponse } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimeResponse";
import { AnimeUI } from "./AnimeUI";
import { ViewModel, AnimeViewModel } from "./ViewModel";

export class AnimeUIPresenter implements AnimeUI, GetAllAnimePresenterInterface {
  private animes: Anime[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentAllAnime(response: GetAllAnimeResponse): void {
    this.animes = response.animes;
    this.updateAnimeViewModel();
  }

  private updateAnimeViewModel() {
    this._viewModel.animes = this.animes.map(anime => {
      return new AnimeViewModel(
        anime.id,
        anime.type,
        anime.description,
        anime.synopsis,
        anime.name,
        anime.image
      );
    })
  }
}