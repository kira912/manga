import { MangaController } from "./manga/MangaController";
import { AnimeController } from "./anime/AnimeController";
import { ChapterController } from "./scan/chapters/ChapterController";
import { PageController } from "./scan/pages/PageController";
import { AnimeFactory } from "./anime/AnimeFactory";
import { ChapterFactory } from "./scan/chapters/ChapterFactory";
import { PageFactory } from "./scan/pages/PageFactory";
import { ScanMangaDexApi } from "../../infrastructure/manga-api/mangaDex/ScanMangaDexApi";
import { MangaFactory } from "./manga/MangaFactory";
import { MangaApiMangaDex } from "../../infrastructure/manga-api/mangaDex/MangaApiMangaDex";
import { AnilistApi } from "../../infrastructure/manga-api/anilist/AnilistApi";

export const animeApi = new AnilistApi();
export const scanMangadexApi = new ScanMangaDexApi();
export const mangadexApi = new MangaApiMangaDex();
export const animeFactory = new AnimeFactory(animeApi);
export const chapterFactory = new ChapterFactory(scanMangadexApi);
export const pageFactory = new PageFactory(scanMangadexApi);
export const mangaFactory = new MangaFactory(mangadexApi);

export {
    MangaController,
    AnimeController,
    ChapterController,
    PageController,
    ScanMangaDexApi,
    AnimeFactory,
    ChapterFactory,
    PageFactory,
    MangaFactory
};