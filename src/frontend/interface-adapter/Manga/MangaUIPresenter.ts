import {
  Manga,
  GetAllMangaPresenterInterface,
  GetAllMangaResponse,
  SearchAnimePresenterInterface,
  SearchAnimeResponse,
} from "../../../manga/domain";
import { MangaUI } from "./MangaUI";
import { ViewModel, MangaViewModel, AnimeSearchResultViewModel } from "./ViewModel";

export class MangaUIPresenter
  implements
    MangaUI,
    GetAllMangaPresenterInterface,
    SearchAnimePresenterInterface
{
  private mangas: Manga[] = [];
  private resultAnimeSearch: AnimeSearchResultViewModel[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentAllManga(response: GetAllMangaResponse): void {
    this.mangas = response.mangas;
    this.updateAnimeViewModel();
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
    this.viewModel.mangas = this.mangas.map((manga) => {
      return new MangaViewModel(
        manga.id,
        manga.description,
        manga.name,
        manga.image
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
}
