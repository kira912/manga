import {
  Manga,
  GetAllMangaPresenterInterface,
  GetAllMangaResponse,
  SearchAnimePresenterInterface,
  SearchAnimeResponse,
} from "../../../manga/domain";
import { MangaUI } from "./MangaUI";
import { ViewModel, MangaViewModel, MangaSearchResultViewModel } from "./ViewModel";

export class MangaUIPresenter
  implements
    MangaUI,
    GetAllMangaPresenterInterface,
    SearchAnimePresenterInterface
{
  private mangas: Manga[] = [];
  private resultMangaSearch: Manga[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentAllManga(response: GetAllMangaResponse): void {
    this.mangas = response.mangas;
    this.updateAnimeViewModel();
  }

  presentSearchAnime(response: SearchAnimeResponse): void {
    this.resultMangaSearch = response.resultMangas;
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
        manga.mangaId.id.toString(),
        manga.props.description.value,
        manga.props.name.value,
        manga.props.image.value
      );
    });
  }

  private updateSearchedAnimeViewModel() {
    this.viewModel.resultMangaSearch = this.resultMangaSearch.map((manga) => {
      console.log(manga);
      
      return new MangaSearchResultViewModel(
        manga.mangaId.id.toString(),
        manga.props.name.value,
        manga.props.image.value,
      );
    });
  }
}
