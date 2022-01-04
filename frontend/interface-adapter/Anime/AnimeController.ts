import { GetAllAnimePresenterInterface } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnimePresenterInterface";
import { GetAllAnime } from "../../../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnime";

export class AnimeController {
    constructor(
        private getAllAnime: GetAllAnime,
        private getAllAnimePresenter: GetAllAnimePresenterInterface) {
    }

    refreshSummary() {
        this.getAllAnime.execute(this.getAllAnimePresenter)
    }
}