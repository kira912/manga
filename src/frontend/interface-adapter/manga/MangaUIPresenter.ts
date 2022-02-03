import {
  Manga,
  GetAllMangaPresenterInterface,
  GetAllMangaResponse,
  SearchMangaPresenterInterface,
  SearchMangaResponse,
  GetMangaByIdPresenterInterface,
  GetMangaByIdResponse,
} from "../../../manga/domain";
import { MangaUI } from "./MangaUI";
import {
  ViewModel,
  MangaViewModel,
  MangaSearchResultViewModel,
} from "./ViewModel";

export class MangaUIPresenter
  implements
    MangaUI,
    GetAllMangaPresenterInterface,
    SearchMangaPresenterInterface,
    GetMangaByIdPresenterInterface
{
  private mangas: Manga[] = [];
  private manga?: Manga;
  private resultMangaSearch: Manga[] = [];
  private _viewModel = new ViewModel();

  get viewModel() {
    return this._viewModel;
  }

  presentAllManga(response: GetAllMangaResponse): void {
    this.mangas = response.mangas;
    this.updateMangasViewModel();
  }

  presentSearchManga(response: SearchMangaResponse): void {
    this.resultMangaSearch = response.resultMangas;
    this.updateSearchedMangaViewModel();
  }

  presentGetMangaById(response: GetMangaByIdResponse): void {
    this.manga = response.manga;
    this.updateMangaViewModel();
  }

  showResultSearch(): void {
    this.viewModel.setDisplayResultSeatch(true);
  }

  hideResultSearch(): void {
    this.viewModel.setDisplayResultSeatch(false);
  }

  private updateMangasViewModel() {
    this.viewModel.mangas = this.mangas.map((manga) => {
      return new MangaViewModel(
        manga.mangaId.id.toString(),
        manga.props.description.value,
        manga.props.name.value,
        manga.props.image.value,
        manga.mangaOriginalLang.value,
        manga.mangaYear.value,
        manga.mangaStatus.value
      );
    });
  }

  private updateSearchedMangaViewModel() {
    this.viewModel.resultMangaSearch = this.resultMangaSearch.map((manga) => {
      console.log(manga);

      return new MangaSearchResultViewModel(
        manga.mangaId.id.toString(),
        manga.props.name.value,
        manga.props.image.value
      );
    });
  }

  private updateMangaViewModel() {
    this.viewModel.manga = new MangaViewModel(
      this.manga!.mangaId.id.toString(),
      this.manga!.props.description.value,
      this.manga!.props.name.value,
      this.manga!.props.image.value,
      this.manga!.mangaOriginalLang.value,
      this.manga!.mangaYear.value,
      this.manga!.mangaStatus.value
    );
  }
}
